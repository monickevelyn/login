import Input from '../form/Input'

export default function InputEmail(){

    return(
        <>
        <Input 
            type="email"   
            placeholder="seu@exemplo.com"    
            title="Email"
            name="email"    
            id="email"
            // value={e.target.name}
        />
        </>
    )
}