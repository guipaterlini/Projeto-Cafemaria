import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { cadastroUsuario } from "../../services/MainApi/usuarios";
import Header from "../../components/Header";
import { Button, Form, Input, Main, Span } from "./styles";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginUsuario } from "../../services/MainApi/login";
import React from "react";

type AuthFormValues = {
  name?: string;
  email: string;
  password: string;
};

type FormType = "login" | "cadastro";

interface Props {
  formType: FormType;
}

export default function AuthPage({ formType }: Props) {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AuthFormValues> = (data) => {
    if (formType === "login") {
      loginUsuario(data)
        .then((response) => {
          localStorage.removeItem("token"); // Remove o token antigo, se existir
          localStorage.setItem("token", response.data.token); // Define o novo token
          navigate("/"); // Redirecionamento para a página Home
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data); // Verifica a resposta da API no console
          }
          // Exibe uma mensagem de erro genérica para o usuário
          alert(
            "Ocorreu um erro durante o login. Verifique seus dados e tente novamente."
          );
        });
    } else if (formType === "cadastro") {
      cadastroUsuario(data)
        .then((response) => {
          localStorage.removeItem("token"); // Remove o token antigo, se existir
          navigate("/login"); // Redirecionamento para a página Login
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data); // Verifica a resposta da API no console
          }
          // Exibe uma mensagem de erro genérica para o usuário
          alert(
            "Ocorreu um erro durante o cadastro. Verifique seus dados e tente novamente."
          );
        });
    }
  };

  return (
    <Main>
      <Header open={open} setOpen={setOpen} />

      <Form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        {formType === "cadastro" && (
          <>
            <Input
              type="text"
              placeholder="Nome"
              {...register("name", { required: true })}
            />
            {errors.name && <Span>Este campo é obrigatório.</Span>}
          </>
        )}

        <Input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <Span>Este campo é obrigatório.</Span>}

        <Input
          type="password"
          placeholder="Senha"
          {...register("password", { required: true })}
        />
        {errors.password && <Span>Este campo é obrigatório.</Span>}

        <Button>{formType === "login" ? "Login" : "Crie sua conta"}</Button>
        <span>
          {formType === "login" ? "Cliente novo? " : "Você já tem uma conta? "}
          <Link to={formType === "login" ? "/cadastro" : "/login"}>
            {formType === "login" ? "Comece aqui." : "Fazer login"}
          </Link>
        </span>
      </Form>

      <Footer />
    </Main>
  );
}
