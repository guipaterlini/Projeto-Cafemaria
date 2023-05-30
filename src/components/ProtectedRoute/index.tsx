import * as jose from "jose";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const ProtectedRoute: React.FC = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
      } else {
        // Faça a verificação do token e redirecione, se necessário
        try {
          const decodedToken: any = jose.decodeJwt(token);
          const expirationDate = new Date(decodedToken.exp * 1000);
          const currentDate = new Date();
          if (currentDate > expirationDate) {
            navigate("/login");
          }
        } catch (error) {
          navigate("/login");
        }
      }
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };

  return ProtectedRoute;
};

export default withAuth;
