import "./style.formcadastro.scss";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import BtnSubmit from "./BtnSubmit";
import BtnGoogle from "../components/btngoogle/BtnGoogle";
import Input from "./Input";
import Message from "../components/message/Message";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";

export default function FormCadastro() {

  const { user, setUser } = useContext(UserContext);

  const [msg, setMsg] = useState({
    type: "",
    message: "",
  });

  const navigate = useNavigate();

  const SubmitCadastro = async (e) => {
    e.preventDefault();

    if (!Validate()) return;

    const saveFormCadastro = true;

    if (saveFormCadastro) {
      setMsg({
        type: "sucess",
        message: "Cadastro feito com sucesso.",
      });
      navigate("/home")
    } else {
      setMsg({
        type: "error",
        message: "Não foi possível fazer o cadastro. Verifique seus dados.",
      });
    }
  };

  function Validate() {
    if (user.nome.length < 3 || !user.nome)
      return setMsg({
        type: "error",
        message: "Nome inválido. Deve-se conter no minímo 3 caracteres",
      });

    if (user.email.length < 10 || !user.email)
      return setMsg({
        type: "error",
        message: "Email inválido. Deve-se conter no minímo 10 caracteres",
      });

    if (
      user.senha.length < 6 ||
      user.senha.length > 6 ||
      !user.senha
    )
      return setMsg({
        type: "error",
        message: "Senha inválida. Deve-se conter 6 caracteres",
      });

    return true;
  }

   const valueInput = (e) => setUser({ ...user, [e.target.name]: e.target.value });
 
  return (
    <>
      <form onSubmit={SubmitCadastro}>
        {<Message type={msg.type} text={msg.message} />}
        <h1>Cadastro</h1>
        <div className="input-container">
          <Input
            type="text"
            placeholder="3 caracteres ou mais"
            title="Nome"
            name="nome"
            id="nome"
            icon={<FiUser className="icon" />}
            value={user.nome}
            onChange={valueInput}
          />

          <Input
            type="email"
            placeholder="seu@exemplo.com"
            title="Email"
            name="email"
            id="email"
            icon={<FiMail className="icon" />}
            value={user.email}
            onChange={valueInput}
          />

          <Input
            type="password"
            placeholder="6 caracteres"
            title="Senha"
            name="senha"
            id="senha"
            icon={<FiLock className="icon" />}
            value={user.senha}
            onChange={valueInput}
            minLength="6"
            maxLength="6"
          />
        </div>
        <BtnSubmit textbtn="Cadastrar" />
        <BtnGoogle />
      </form>
    </>
  );
}