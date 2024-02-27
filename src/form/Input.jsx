import "./style.input.scss"

export default function Input({ type, name, placeholder, id, title, value }){

    return(
        <>
        <div className="input">
            <label htmlFor={id}> {title} </label>
            <input type={type} name={name} id={id} placeholder={placeholder} value={value} />
        </div>
        </>
    )
}