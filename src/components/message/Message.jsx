import "./style.message.scss";
import PropTypes from "prop-types"
export default function Message({ type, text }){
    return(
        <>
        <div className={`msg ${type}`}>
            <span>{text}</span>
        </div>
        </>
    )
}
Message.propTypes = {
    type: PropTypes.func,
    text: PropTypes.func
}