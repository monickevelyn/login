import "./style.form.scss";
import image from "../assets/image.svg"
import FormCadastro from "../components/form/FormCadastro";

export default function Form() {

  return (
    <>
    <div className="page-form">
      <FormCadastro />
      <img src={image} alt="img" />
    </div>     
    </>
  );
}