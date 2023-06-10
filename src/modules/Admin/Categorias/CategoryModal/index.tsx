import React, { useEffect } from "react";
import { SubmitHandler, useForm, FieldError } from "react-hook-form";
import { Form, ModalContainer, ModalContent } from "./styles";
import {
  atualizarCategoria,
  cadastroCategoria,
} from "../../../../services/MainApi/categorias";
import { CategoryData } from "../../../../type";

interface FormModalProps {
  onClose: () => void;
  onCreateSuccess?: () => void;
  category: CategoryData | null; // Categoria selecionada como propriedade
}

const CategoryModal: React.FC<FormModalProps> = ({
  onClose,
  onCreateSuccess,
  category,
}) => {
  const { handleSubmit, register, formState, setValue } = useForm();
  const { errors } = formState;

  useEffect(() => {
    if (category) {
      setValue("title", category.title);
      setValue("description", category.description);
    }
  }, [category, setValue]);

  // Função de callback que é executada quando o formulário é submetido
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      // Cria um novo FormData e preenche com os dados do formulário
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("published", "true");

      if (category) {
        // Chama a função de atualização da categoria para enviar os dados para a API
        await atualizarCategoria(category.id, formData);
      } else {
        // Modo de criação - cria uma nova categoria
        await cadastroCategoria(formData);
      }

      // Chama a função onCreateSuccess, se fornecida, para indicar o sucesso da criação da categoria
      onCreateSuccess && onCreateSuccess();

      // Fecha o modal
      onClose();
    } catch (error) {
      console.error("Erro ao enviar dados do formulário:", error);
    }
  };

  // Função de callback para fechar o modal quando ocorre um clique fora dele
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) =>
    e.target === e.currentTarget && onClose();

  return (
    <ModalContainer onClick={handleOutsideClick}>
      <ModalContent>
        <h2>{category ? "Editar Categoria" : "Adicionar Categoria"}</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome:
            <input type="text" {...register("title", { required: true })} />
          </label>
          {errors.title && <span>Este campo é obrigatório</span>}

          <label>
            Descrição:
            <textarea
              {...register("description", {
                required: true,
                maxLength: { value: 300, message: "Máximo de 300 caracteres" },
              })}
            />
          </label>
          {errors.description && (
            <span>
              {(errors.description as FieldError)?.message ||
                "Este campo é obrigatório"}
            </span>
          )}

          <div className="button-group">
            <button type="submit">{category ? "Editar" : "Criar"}</button>
            <button type="button" onClick={() => onClose()}>
              Cancelar
            </button>
          </div>
        </Form>
      </ModalContent>
    </ModalContainer>
  );
};

export default CategoryModal;
