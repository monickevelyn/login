import './style.btnsubmit.scss'
import PropTypes from "prop-types"
export default function BtnSubmit({ textbtn }){
    return(
        <>
        <button className='btn-submit'>{textbtn}</button>        
        </>
    )
}
BtnSubmit.propTypes = {
    textbtn: PropTypes.string
}