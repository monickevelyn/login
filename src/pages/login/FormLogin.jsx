import '../style.form.scss'
import BtnSubmit from '../../form/BtnSubmit'
import BtnSocial from '../../components/BtnSocial'
import InputEmail from '../../components/InputEmail'
import InputSenha from '../../components/InputSenha'

import { Link } from 'react-router-dom'

export default function FormLogin(){

    return(
        <>
        <form>
            <h1>Login</h1>
            <div className="input-container">
                <InputEmail />
                <InputSenha />
            </div>  
            <BtnSubmit textbtn="Logar" />   
            <BtnSocial />

            <div>
                <span>
                    Ainda não tem conta? <Link to="/cadastro">Cadastra-se</Link>
                </span>
            </div>
        </form>
        </>
    )
}