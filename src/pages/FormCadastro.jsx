import "./style.form.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import BtnSubmit from "../form/BtnSubmit";
import BtnGoogle from "../components/btngoogle/BtnGoogle";
import Input from "../form/Input";

export default function FormCadastro() {

  const [nome, setNome] = useState()
  const [senha, setSenha] = useState()
  const [email, setEmail] = useState()

  const SubmitCadastro = (e) =>{
    e.preventDefault();
    // validações e mensagem de evento (enviado ou não)
  }

  return (
    <>
      <form onSubmit={SubmitCadastro}>
        <h1>Cadastro</h1>
        <div className="input-container">
          <Input
            type="text"
            placeholder="3 caracteres ou mais"
            title="Nome"
            name="nome"
            id="nome"
            icon={<FiUser className="icon" />}
            value={nome}
            onChange={e => setNome(e.target.value)}
            minLength="3"
            maxLength="50"    
          />

          <Input 
            type="email"   
            placeholder="seu@exemplo.com"    
            title="Email"
            name="email"    
            id="email"
            icon={<FiMail className='icon' />}
            value={email}
            onChange={e => setEmail(e.target.value)}
            minLength="10"
            maxLength="60"
          />

          <Input 
            type="password"   
            placeholder="6 caracteres"    
            title="Senha"
            name="senha"    
            id="senha"
            icon={<FiLock className='icon' />}
            value={senha}
            onChange={e => setSenha(e.target.value)}
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
