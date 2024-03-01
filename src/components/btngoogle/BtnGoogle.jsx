import "./style.btngoogle.scss"
import { FcGoogle } from "react-icons/fc";

export default function BtnGoogle(){

  function handleGoogle(){
    alert("Apenas um botão de efeite <3")
  }
    return(
        <>
        <button className="btn-google" onClick={handleGoogle}>
          <span><FcGoogle className="icon" /></span>
          <span>Entrar com o Google</span>
        </button>    
        </>
    )
}