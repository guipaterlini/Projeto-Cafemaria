import React from "react";
import { useNavigate } from "react-router-dom";
import * as jose from "jose";
import { Button } from "./styles";

// Função auxiliar para obter o tipo de usuário a partir do token
const getUserTypeFromToken = (token: string | null) => {
  if (!token || typeof token === "undefined") {
    return null;
  }
  try {
    const decodedToken: any = jose.decodeJwt(token);
    return decodedToken.role;
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return null;
  }
};

const TokenButton: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userType = getUserTypeFromToken(token);

  const handleClick = () => {
    // Verifica se o token é nulo, indefinido ou userType é nulo
    if (!token || typeof token === "undefined" || userType === null) {
      navigate("/login"); // Redireciona para a página de login
    } else {
      if (userType === "buyer") {
        navigate("/pedidos"); // Redireciona para a página de pedidos para usuários compradores
      } else if (userType === "admin") {
        navigate("/admin"); // Redireciona para a página de administração para usuários administradores
      } else {
        navigate("/login"); // Redireciona para a página de login se o userType não for reconhecido
      }
    }
  };

  let buttonText = "";
  if (!token || typeof token === "undefined" || userType === null) {
    buttonText = "Login"; // Define o texto do botão como "Login" se o token for nulo, indefinido ou userType for nulo
  } else {
    // Define o texto do botão com base no userType
    buttonText =
      userType === "buyer"
        ? "Minha conta"
        : userType === "admin"
        ? "Painel Admin"
        : "Login";
  }

  return <Button onClick={handleClick}>{buttonText}</Button>; // Renderiza o botão com o texto correspondente e o tratamento de clique
};

export default TokenButton;
