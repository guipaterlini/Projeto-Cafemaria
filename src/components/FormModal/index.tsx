import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, ModalContainer, ModalContent } from "./styles";

interface Field {
  label: string;
  name: string;
  type: string;
  required: boolean;
}

interface FormValues {
  [key: string]: string;
}

interface FormModalProps {
  onClose: () => void;
  userId: number | null;
  fields: Field[]; // Configurações dos campos do formulário
  title: string; // Título personalizado
}

const FormModal: React.FC<FormModalProps> = ({ onClose, userId, fields, title }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Lógica para enviar os dados do formulário para a API e criar um novo usuário admin
    // Você pode usar a função de API adequada para isso (por exemplo, uma função chamada "criarUsuarioAdmin(payload)")
    // Após a criação bem-sucedida, pode fechar o modal chamando a função onClose()
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContainer onClick={handleOutsideClick}>
      <ModalContent>
        <h2>Adicionar {title}</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field) => (
            <label key={field.name}>
              {field.label}:
              <input
                type={field.type}
                {...register(field.name, { required: field.required })}
              />
              {errors[field.name] && <span>Este campo é obrigatório</span>}
            </label>
          ))}
          <button type="submit">Criar</button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </Form>
      </ModalContent>
    </ModalContainer>
  );
};

export default FormModal;
