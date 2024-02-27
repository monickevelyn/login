import Input from '../form/Input'
import { FiLock  } from "react-icons/fi";

export default function InputSenha(){

    return(
        <>
        <Input 
            type="password"   
            placeholder="6 caracteres ou mais"    
            title="Senha"
            name="senha"    
            id="senha"
            icon={<FiLock className='icon' />}
            // value={e.target.name}
        />
        </>
    )
}