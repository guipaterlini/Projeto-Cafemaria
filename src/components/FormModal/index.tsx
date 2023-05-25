import React, { useState } from "react";
import { ModalContainer, ModalContent } from "./styles";

interface FormModalProps {
  onClose: () => void;
  userId: number | null; // Adicionando a propriedade userId na interface
}

const FormModal: React.FC<FormModalProps> = ({ onClose, userId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário para a API e criar um novo usuário admin
    // Você pode usar a função de API adequada para isso (por exemplo, uma função chamada "criarUsuarioAdmin(payload)")
    // Após a criação bem-sucedida, pode fechar o modal chamando a função onClose()
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Fecha o modal apenas se o clique foi fora da caixa do modal
    }
  };

  return (
    <ModalContainer onClick={handleOutsideClick}>
      <ModalContent>
        <h2>Adicionar Novo Usuário Admin</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Primeiro Nome:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Último Nome:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Criar</button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};

export default FormModal;
