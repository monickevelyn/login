import './index.scss'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
    <div className="div-body">
      <Outlet /> 
    </div>
    </>
  )
}