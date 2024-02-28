import './style.btngoogle.scss'
import { FcGoogle } from "react-icons/fc";

export default function BtnGoogle(){

    return(
        <>
        <div className='div-btn'>
            <button> 
                <span><FcGoogle /></span>
                <p>Entrar com o Google</p>
            </button>
        </div>
        </>
    )
}