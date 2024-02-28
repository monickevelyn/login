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
    type: PropTypes.string,
    text: PropTypes.string
}

/*
    <Message type="sucess" text="formulário enviado"/>
    <Message type="error" text="formulário não enviado"/>
*/ 