import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, ModalContainer, ModalContent } from "./styles";
import { cadastroProduto } from "../../services/MainApi/produtos";
import { cadastroCategoria } from "../../services/MainApi/categorias";
import { cadastroUsuario } from "../../services/MainApi/usuarios";

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
  fields?: Field[]; // Configurações dos campos do formulário
  onCreate?: () => void; // Função de criação específica para cada entidade
  entityType: "Categorias" | "Produtos" | "Usuários"; // Tipo de entidade
  title: string; // Título personalizado
}

const FormModal: React.FC<FormModalProps> = ({
  onClose,
  userId,
  fields,
  entityType, // Adicione a propriedade entityType aqui
  title,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData();

    // Adicionar campos e valores ao objeto FormData
    Object.entries(data).forEach(([name, value]) => {
      formData.append(name, value as string);
    });

    formData.append("image", selectedFile || "");

    try {
      // Enviar o objeto FormData para a API
      switch (entityType) {
        case "Categorias":
          await cadastroCategoria(formData);
          break;
        case "Produtos":
          await cadastroProduto(formData);
          break;
        // case "Usuários":
        //   await cadastroUsuario(formData);
        //   break;
        default:
          break;
      }
      // Fechar o modal após o envio bem-sucedido
      onClose();
    } catch (error) {
      console.error("Erro ao enviar dados do formulário:", error);
    }
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
          {fields?.map((field) => (
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
                  {field.type === "file" ? (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setSelectedFile(e.target.files?.[0] || null)
                      }
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
