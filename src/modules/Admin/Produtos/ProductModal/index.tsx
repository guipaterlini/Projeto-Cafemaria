import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm, FieldError } from "react-hook-form";
import { Form, ModalContainer, ModalContent } from "./styles";
import { CategoryData, ProductData } from "../../../../type";
import {
  atualizarProduto,
  cadastroProduto,
} from "../../../../services/MainApi/produtos";
import { listarCategorias } from "../../../../services/MainApi/categorias";

interface FormModalProps {
  onClose: () => void;
  onCreateSuccess?: () => void;
  product: ProductData | null; // Produto selecionada como propriedade
}

const ProductModal: React.FC<FormModalProps> = ({
  onClose,
  onCreateSuccess,
  product,
}) => {
  const { handleSubmit, register, formState, setValue } = useForm();
  const { errors } = formState;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<CategoryData[]>([]);

  useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("amount", product.amount);
      setValue("option", product.option);
      setValue("category_id", product.category_id);
      setValue("image", product.image);
    }
  }, [product, setValue]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await listarCategorias();
        const fetchedCategories = response.data.result;
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategories();
  }, []);

  // Função de callback que é executada quando o formulário é submetido
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      // Cria um novo FormData e preenche com os dados do formulário
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("amount", data.amount);
      formData.append("option", data.option);
      formData.append("published", "true");
      formData.append("category_id", data.category_id);
      formData.append("image", selectedFile || "");

      if (product) {
        // Chama a função de atualização do produto para enviar os dados para a API
        await atualizarProduto(product.id, formData);
      } else {
        // Modo de criação - cria um novo produto
        await cadastroProduto(formData);
      }

      // Chama a função onCreateSuccess, se fornecida, para indicar o sucesso da criação do produto
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
        <h2>{product ? "Editar Produto" : "Adicionar Produto"}</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome:
            <input
              type="text"
              {...register("title", {
                required: true,
                maxLength: { value: 100, message: "Máximo de 100 caracteres" },
              })}
            />
          </label>
          {errors.title && (
            <span>
              {(errors.title as FieldError)?.message ||
                "Este campo é obrigatório"}
            </span>
          )}

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

          <label>
            Preço:
            <input
              type="number"
              {...register("price", {
                required: true,
              })}
            />
          </label>
          {errors.price && <span>Este campo é obrigatório</span>}

          <label>
            Quantidade:
            <input
              type="number"
              {...register("amount", {
                required: true,
              })}
            />
          </label>
          {errors.amount && <span>Este campo é obrigatório</span>}

          <label>
            Variante:
            <input
              type="text"
              placeholder="Ex: Azul, 110v, etc"
              {...register("option", {
                required: true,
                maxLength: { value: 100, message: "Máximo de 100 caracteres" },
              })}
            />
          </label>
          {errors.option && (
            <span>
              {(errors.option as FieldError)?.message ||
                "Este campo é obrigatório"}
            </span>
          )}

          <label>
            Categoria:
            <select {...register("category_id", { required: true })}>
              <option value="">Selecione uma categoria</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </label>
          {errors.category_id && <span>"Este campo é obrigatório"</span>}

          <label>
            Imagem:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            />
          </label>
          {errors.image && <span>"Este campo é obrigatório"</span>}

          <div className="button-group">
            <button type="submit">{product ? "Editar" : "Criar"}</button>
            <button type="button" onClick={() => onClose()}>
              Cancelar
            </button>
          </div>
        </Form>
      </ModalContent>
    </ModalContainer>
  );
};

export default ProductModal;
