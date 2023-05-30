import React from "react";
import { useNavigate } from "react-router-dom";
import * as jose from "jose";
import { Button } from "./styles";


const TokenButton: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleClick = () => {
    if (!token || typeof token === "undefined") {
      // Verifica se o token é nulo ou indefinido
      navigate("/login");
    } else {
      try {
        const decodedToken: any = jose.decodeJwt(token);
        const userType = decodedToken.role;

        if (userType === "buyer") {
          navigate("/pedidos");
        } else if (userType === "admin") {
          navigate("/admin");
        }
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
        navigate("/login"); // Redireciona para /login em caso de erro na decodificação
      }
    }
  };

  let buttonText = "";
  if (!token || typeof token === "undefined") {
    buttonText = "Login";
  } else {
    try {
      const decodedToken: any = jose.decodeJwt(token);
      const userType = decodedToken.role;

      if (userType === "buyer") {
        buttonText = "Minha conta";
      } else if (userType === "admin") {
        buttonText = "Painel Admin";
      }
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      buttonText = "Login"; // Define o texto do botão como "Login" em caso de erro na decodificação
    }
  }

  return <Button onClick={handleClick}>{buttonText}</Button>;
};

export default TokenButton;
