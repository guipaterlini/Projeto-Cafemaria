import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CheckboxWrapper, Form, ModalContainer, ModalContent } from "./styles";

interface Field {
  label: string;
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string | boolean;
}

interface FormValues {
  [key: string]: string | boolean;
}

interface FormModalProps {
  onClose: () => void;
  userId: number | null;
  fields: Field[]; // Configurações dos campos do formulário
  title: string; // Título personalizado
}

const FormModal: React.FC<FormModalProps> = ({
  onClose,
  userId,
  fields,
  title,
}) => {
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
            <React.Fragment key={field.name}>
              {field.type === "checkbox" ? (
                <label>
                  <input
                    type="checkbox"
                    {...register(field.name)}
                    defaultChecked={field.defaultValue as boolean}
                    disabled={field.defaultValue !== undefined}
                  />
                  {field.label}
                </label>
              ) : (
                <label>
                  {field.label}:
                  {field.type === "image" ? (
                    <input
                      type="file"
                      accept="image/*"
                      {...register(field.name, { required: field.required })}
                    />
                  ) : (
                    <input
                      type={field.type}
                      {...register(field.name, { required: field.required })}
                      defaultValue={field.defaultValue as string}
                      className={
                        field.type === "checkbox" ? "checkbox-input" : ""
                      }
                      disabled={field.defaultValue !== undefined}
                    />
                  )}
                </label>
              )}
              {errors[field.name] && <span>Este campo é obrigatório</span>}
            </React.Fragment>
          ))}
          <div className="button-group">
            <button type="submit">Criar</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </Form>
      </ModalContent>
    </ModalContainer>
  );
};

export default FormModal;
