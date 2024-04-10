import "./style.home.scss";
import imghome from "../assets/imghome.svg"
import { useParams } from "react-router-dom"

export default function Home() {
  const { id } = useParams()

  return (
    <>
    <div className="home">
      <h1>Olá, <span>{id}</span></h1>
      <img src={imghome} alt="image-home" />
      <a href="https://storyset.com/people">illustrations by Storyset</a>
    </div>     
    </>
  );
}