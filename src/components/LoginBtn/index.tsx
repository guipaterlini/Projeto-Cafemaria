import React from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const TokenButton: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleClick = () => {
    if (!token) {
      navigate('/login');
    } else {
      try {
        const decodedToken: any = jwt.decode(token);
        const userType = decodedToken.tipo;

        if (userType === 'usuario') {
          navigate('/minhaconta');
        } else if (userType === 'admin') {
          navigate('/admin');
        }
      } catch (error) {
        // Tratar erro ao decodificar o token
      }
    }
  };

  let buttonText = '';
  if (!token) {
    buttonText = 'Login';
  } else {
    try {
      const decodedToken: any = jwt.decode(token);
      const userType = decodedToken.tipo;

      if (userType === 'usuario') {
        buttonText = 'Minha conta';
      } else if (userType === 'admin') {
        buttonText = 'Painel Admin';
      }
    } catch (error) {
      // Tratar erro ao decodificar o token
    }
  }

  return (
    <button onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default TokenButton;
