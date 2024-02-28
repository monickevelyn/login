import "./style.form.scss";
import Input from '../form/Input'
import BtnSubmit from "../form/BtnSubmit";
import BtnGoogle from "../components/btngoogle/BtnGoogle";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FiMail, FiLock } from "react-icons/fi";

export default function FormLogin() {

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  return (
    <>
      <form>
        <h1>Login</h1>
        <div className="input-container">
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

        <BtnSubmit textbtn="Logar" />
        <BtnGoogle />

        <div>
          <span>
            Ainda não tem conta? <Link to="/cadastro">Cadastra-se</Link>
          </span>
        </div>
      </form>
    </>
  );
}
