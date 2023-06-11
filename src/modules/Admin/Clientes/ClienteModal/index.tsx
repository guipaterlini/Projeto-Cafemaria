import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, ModalContainer, ModalContent } from "./styles";
import {
  atualizarUsuario,
  cadastroUsuario,
} from "../../../../services/MainApi/usuarios";
import { UserData } from "../../../../type";

interface FormModalProps {
  onClose: () => void;
  onCreateSuccess?: () => void;
  client: UserData | null;
}

const ClientModal: React.FC<FormModalProps> = ({
  onClose,
  onCreateSuccess,
  client,
}) => {
  const { handleSubmit, register, formState, setValue } = useForm();
  const { errors } = formState;

  useEffect(() => {
    if (client) {
      setValue("name", client.name);
      setValue("email", client.email);
    }
  }, [client, setValue]);

  // Função de callback que é executada quando o formulário é submetido
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const requestedData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      if (client) {
        // Chama a função de atualização da categoria para enviar os dados para a API
        await atualizarUsuario(client.id, requestedData);
      } else {
        // Modo de criação - cria uma nova categoria
        await cadastroUsuario(requestedData);
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
        <h2>{client ? "Editar Cliente" : "Cadastrar Cliente"}</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome:
            <input
              type="text"
              {...register("name", {
                required: true,
              })}
            />
          </label>
          {errors.title && <span>"Este campo é obrigatório"</span>}

          <label>
            Email:
            <input
              {...register("email", {
                required: true,
              })}
            />
          </label>

          <label>
            Senha:
            <input
              {...register("password", {
                required: true,
              })}
            />
          </label>
          {errors.email && <span>"Este campo é obrigatório"</span>}

          <div className="button-group">
            <button type="submit">{client ? "Editar" : "Cadastrar"}</button>
            <button type="button" onClick={() => onClose()}>
              Cancelar
            </button>
          </div>
        </Form>
      </ModalContent>
    </ModalContainer>
  );
};

export default ClientModal;
