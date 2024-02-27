import Input from '../form/Input'

export default function InputSenha(){

    return(
        <>
        <Input 
            type="password"   
            placeholder="6 caracteres ou mais"    
            title="Senha"
            name="senha"    
            id="senha"
            // value={e.target.name}
        />
        </>
    )
}