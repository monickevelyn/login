import "./style.form.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import BtnSubmit from "../form/BtnSubmit";
import BtnGoogle from "../components/btngoogle/BtnGoogle";
import Input from "../form/Input";
import Message from "../components/message/Message";

export default function FormCadastro() {

  const [dataCadastro, setDataCadastro] = useState({
    nome: '',
    email: '',
    senha: '',
  })

  const [msg, setMsg] = useState({
    type: '',
    message: '',
  })

  const SubmitCadastro = async e => {
    e.preventDefault();

    if(!Validate()) return;

    const saveFormCadastro = true;

    if(saveFormCadastro){
      setMsg({
        type: "sucess",
        message: "Cadastro feito com sucesso."
      })      
      setDataCadastro ({
        nome: '',
        email: '',
        senha: '',
      })
    }else {
      setMsg({
        type: "error",
        message: "Não foi possível fazer o cadastro. Verifique seus dados."
      })
    }
  }

  function Validate(){
    if(dataCadastro.nome.length < 3 || !dataCadastro.nome)
      return setMsg({
        type: "error",
        message: "Nome inválido. Deve-se conter no minímo 3 caracteres"
      });

    if(dataCadastro.email.length < 10 || !dataCadastro.email)
      return setMsg({
        type: "error",
        message: "Email inválido. Deve-se conter no minímo 10 caracteres"
      })       

    if(dataCadastro.senha.length < 6 || dataCadastro.senha.length > 6  || !dataCadastro.senha)
      return setMsg({
        type: "error",
        message: "Senha inválida. Deve-se conter no 6 caracteres"
      })

    return true;      
  }

  const valueInput = e => setDataCadastro({ ...dataCadastro, [e.target.name] : e.target.value })

  return (
    <>
      <form onSubmit={SubmitCadastro}>
        { <Message type={msg.type} text={msg.message}/> }
        <h1>Cadastro</h1>
        <div className="input-container">
          <Input
            type="text"
            placeholder="3 caracteres ou mais"
            title="Nome"
            name="nome"
            id="nome"
            icon={<FiUser className="icon" />}
            value={dataCadastro.nome}
            onChange={valueInput} 
          />

          <Input 
            type="email"   
            placeholder="seu@exemplo.com"    
            title="Email"
            name="email"    
            id="email"
            icon={<FiMail className='icon' />}
            value={dataCadastro.email}
            onChange={valueInput}
          />

          <Input 
            type="password"   
            placeholder="6 caracteres"    
            title="Senha"
            name="senha"    
            id="senha"
            icon={<FiLock className='icon' />}
            value={dataCadastro.senha}
            onChange={valueInput}
            minLength="6"
            maxLength="6"
          />
        </div>
        <BtnSubmit textbtn="Cadastrar" />
        <BtnGoogle />
        <div>
          <span>
            Já tem conta? Faça o <Link to="/">Login</Link>
          </span>
        </div>
      </form>
    </>
  );
}