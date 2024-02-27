
import './index.scss'
import image from "./assets/image.svg"

import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
    <div className="div-body">
      <Outlet /> 
      <img src={image} alt="img" />
    </div>
    </>
  )
}