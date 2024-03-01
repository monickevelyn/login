import "./style.home.scss";
import imghome from "../assets/imghome.svg"

import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <>
    <div className="home">
      <h1>Olá, {user.nome}</h1>
      <img src={imghome} alt="image-home" />
      <a href="https://storyset.com/people">illustrations by Storyset</a>
    </div>     
    </>
  );
}