import "./style.input.scss"
import PropType from "prop-types"
// import { BsEye, BsEyeSlash  } from "react-icons/bs";

export default function Input({ type, name, placeholder, id, title, icon, value }){

    return(
        <>
        <div className="input">
            <label htmlFor={id}>{icon} {title} </label>
            <input type={type} name={name} id={id} placeholder={placeholder} value={value} />
        </div>
        </>
    )
}
Input.propTypes = {
    type: PropType.string,
    name: PropType.string,
    placeholder: PropType.string,
    id: PropType.string,
    title: PropType.string,
    icon: PropType.func,
    value: PropType.func
}