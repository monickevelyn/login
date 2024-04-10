import "./style.formcadastro.scss";
import "./style.input.scss"

import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import BtnSubmit from "./BtnSubmit";
import BtnGoogle from "../btngoogle/BtnGoogle";

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "../../validation/schema";

const FormCadastro = () => {

  const { register, handleSubmit, formState, watch,  } = useForm({
    defaultValues: { nome: '', email: '' , senha: '' }, mode: 'all', resolver: yupResolver(schema), 
  })

  const { errors } = formState;

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data)   
    const { nome } = data;
    navigate(`/home/${nome}`)
  };
 
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} >
        <h1>Cadastro</h1>
        <div className="input-container">
          <div className="input">
            <label htmlFor="nome"><FiUser className="icon" /> Nome</label>
            <input type="text" autoFocus {...register("nome")} id="nome" value={watch("nome")} />
          </div>
          {errors.nome && <p>{errors.nome.message}</p>}

          <div className="input">
            <label htmlFor="email"><FiMail className="icon" /> E-mail</label>
            <input type="text" {...register("email")} id="email" value={watch("email")} />
          </div>
          {errors.email && <p>{errors.email.message}</p>}

          <div className="input">
            <label htmlFor="senha"><FiLock className="icon" /> Senha</label>
            <input type="text" {...register("senha")} id="senha" value={watch("senha")} />
          </div>
          {errors.senha && <p>{errors.senha.message}</p>}
        </div>
        <BtnSubmit textbtn="Cadastrar" />
        <BtnGoogle />
      </form>
    </>
  );
}

export default FormCadastro;