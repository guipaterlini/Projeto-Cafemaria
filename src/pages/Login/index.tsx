import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import { Button, Form, Input, Main, Span } from "./styles";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginUsuario } from "../../services/MainApi/login";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
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
  };

  return (
    <Main>
      <Header open={open} setOpen={setOpen} />

      <Form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
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
        <Button>Login</Button>
        <span>
          Cliente novo? <Link to={"/cadastro"}>Comece aqui.</Link>
        </span>
      </Form>

      <Footer />
    </Main>
  );
}
