import { Link, useNavigate  } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import { Button, Form, Input, Main } from "./styles";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginUsuario } from "../../services/MainApi/login";

type LoginFormValues = {
  email: string;
  senha: string;
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
    loginUsuario(data).then((response) => {
      localStorage.setItem("token", response.data.token);
      navigate("/"); // Redirecionamento para a página Home
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
        {errors.email && <span>Este campo é obrigatorio</span>}
        <Input
          type="password"
          placeholder="Senha"
          {...register("senha", { required: true })}
        />
        {errors.senha && <span>Este campo é obrigatorio</span>}
        <Button>Login</Button>
        <span>
          Cliente novo? <Link to={"/cadastro"}>Comece aqui.</Link>
        </span>
      </Form>

      <Footer />
    </Main>
  );
}
