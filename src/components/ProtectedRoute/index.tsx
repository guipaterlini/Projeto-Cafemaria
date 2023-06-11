import * as jose from "jose";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Função auxiliar para lidar com erros de token
const handleTokenError = (error: unknown, navigate: any) => {
  if (error instanceof jose.errors.JWTExpired) {
    return "Sua sessão expirou. Faça login novamente.";
  } else if (error instanceof jose.errors.JWTClaimValidationFailed) {
    return "Token de autenticação inválido.";
  }

  return "Ocorreu um erro ao verificar seu token de autenticação.";
};

const withAuth = (WrappedComponent: React.ComponentType) => {
  const ProtectedRoute: React.FC = (props) => {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      // Obtém o token armazenado no localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        // Se não houver token, redireciona para a página de login
        navigate("/login");
      } else {
        try {
          // Decodifica o token JWT
          const decodedToken: any = jose.decodeJwt(token);
          const expirationDate = new Date(decodedToken.exp * 1000);
          const currentDate = new Date();
          if (currentDate > expirationDate) {
            // Se o token expirou, define o erro e redireciona para a página de login
            setError("Sua sessão expirou. Faça login novamente.");
            // Limpa o token inválido do localStorage
            localStorage.removeItem("token");
            navigate("/login");
          }
        } catch (error) {
          if (error instanceof Error) {
            // Se ocorrer um erro conhecido de token, define o erro apropriado
            setError(handleTokenError(error, navigate));
          } else {
            // Se ocorrer um erro desconhecido, define uma mensagem genérica de erro
            setError("Erro desconhecido");
          }
          // Limpa o token inválido do localStorage
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    }, [navigate]);

    if (error) {
      // Se houver um erro, exibe a mensagem de erro
      return <div>{error}</div>;
    }

    // Se não houver erro, renderiza o componente protegido
    return <WrappedComponent {...props} />;
  };

  return ProtectedRoute;
};

export default withAuth;
