import "./style.input.scss"

export default function Input({ type, name, placeholder, id, title, value }){

    return(
        <>
        <div>
            <label htmlFor={id}> {title}
                <input type={type} name={name} id={id} placeholder={placeholder} value={value} />
            </label>
        </div>
        </>
    )
}