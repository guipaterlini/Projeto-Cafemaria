import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, ModalContainer, ModalContent } from "./styles";
import { OrderData } from "../../../../type";
import {
  atualizarStatus,
  cadastroPedido,
} from "../../../../services/MainApi/pedidos";

interface FormModalProps {
  onClose: () => void;
  onCreateSuccess?: () => void;
  order: OrderData | null; // pedido selecionado como propriedade
}

const OrderModal: React.FC<FormModalProps> = ({
  onClose,
  onCreateSuccess,
  order,
}) => {
  const { handleSubmit, register, formState, setValue } = useForm();
  const { errors } = formState;

  useEffect(() => {
    if (order) {
      setValue("buyer", order.buyer);
      setValue("cart", order.cart);
      setValue("total_value", order.total_value);
      setValue("created_at", order.created_at);
    }
  }, [order, setValue]);

  // Função de callback que é executada quando o formulário é submetido
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      // Cria um novo FormData e preenche com os dados do formulário
      const requestedData = {
        buyer: data.buyer,
        cart: data.cart,
        total_value: data.total_value,
        created_at: data.created_at,
      };

      if (order) {
        // Chama a função de atualização da categoria para enviar os dados para a API
        await atualizarStatus(order.id, requestedData);
      } else {
        // Modo de criação - cria uma nova categoria
        await cadastroPedido(requestedData);
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
        <h2>{order ? "Editar Pedido" : "Adicionar Pedido"}</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Comprador:
            <input
              type="text"
              {...register("buyer", {
                required: true,
              })}
            />
          </label>
          {errors.buyer && <span>"Este campo é obrigatório"</span>}

          <label>
            Produtos:
            <input
              type="text"
              {...register("cart", {
                required: true,
              })}
            />
          </label>
          {errors.cart && <span>"Este campo é obrigatório"</span>}

          <label>
            Total:
            <input
              type="number"
              {...register("total_value", {
                required: true,
              })}
            />
          </label>
          {errors.total_value && <span>"Este campo é obrigatório"</span>}

          <label>
            Data da Compra:
            <input
              type="date"
              {...register("created_at", {
                required: true,
              })}
            />
          </label>
          {errors.created_at && <span>"Este campo é obrigatório"</span>}

          <div className="button-group">
            <button type="submit">{order ? "Editar" : "Criar"}</button>
            <button type="button" onClick={() => onClose()}>
              Cancelar
            </button>
          </div>
        </Form>
      </ModalContent>
    </ModalContainer>
  );
};

export default OrderModal;
