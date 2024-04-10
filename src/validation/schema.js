import * as Yup from "yup"
const schema = Yup.object().shape({
    nome: 
      Yup.string()
      .min(3, 'No minímo 3 caracteres')
      .required("Nome é obrigatório"),
    email: 
      Yup.string()
      .email("E-mail inválido")
      .min(15, 'No minímo 15 caracteres')
      .required("E-mail é obrigatório"),
    senha: 
      Yup.string()
      .min(6,'Senha de 6 caracteres')
      .max(6,'Senha de 6 caracteres')
      .required("Senha é obrigatório")
})

export default schema;