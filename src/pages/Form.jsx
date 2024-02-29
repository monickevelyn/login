import "./style.form.scss";
import image from "../assets/image.svg"
import FormCadastro from "../form/FormCadastro";

export default function Form() {

  return (
    <>
    <FormCadastro />
    <img src={image} alt="img" />      
    </>
  );
}