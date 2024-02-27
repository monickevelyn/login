import Input from '../form/Input'
import { FiMail } from "react-icons/fi";

export default function InputEmail(){

    return(
        <>
        <Input 
            type="email"   
            placeholder="seu@exemplo.com"    
            title="Email"
            name="email"    
            id="email"
            icon={<FiMail className='icon' />}
            // value={e.target.name}
        />
        </>
    )
}