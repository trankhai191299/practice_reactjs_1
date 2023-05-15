import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <NavLink className="nav-link active text-dark" to="/">Home</NavLink>
        <NavLink className="nav-link text-dark" to="/login">Login</NavLink>
      </nav>
      </div>
  )
}