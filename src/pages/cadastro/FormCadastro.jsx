import '../style.form.scss'
import BtnSubmit from '../../form/BtnSubmit'
import BtnSocial from '../../components/BtnSocial'
import Input from '../../form/Input'
import InputEmail from '../../components/InputEmail'
import InputSenha from '../../components/InputSenha'
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom'

export default function FormCadastro(){

    return(
        <>
        <form>
            <h1>Cadastro</h1>
            <div className="input-container">
                <Input 
                    type="text"   
                    placeholder="3 caracteres ou mais"    
                    title="Nome"
                    name="nome"    
                    id="nome"
                    icon={<FiUser className='icon' />}
                    // value={e.target.name}
                 />
                <InputEmail />
                <InputSenha />
            </div>  
            <BtnSubmit textbtn="Cadastrar" />   
            <BtnSocial />
            <div>
                <span>
                    Já tem conta? Faça o <Link to="/login">Login</Link>
                </span>
            </div>
        </form>
        </>
    )
}