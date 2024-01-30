import "./Navbar.css"
import { PiSparkleFill } from "react-icons/pi";
export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-title-container">
        <div className="nav-logo">
            <PiSparkleFill />
        </div>
        <a href= "/" className="site-title">Taylor Swift </a>
      </div>
      <ul>
        <li className= "merch">
          <a href= "/Merch">Merch</a>
          </li>
          <li className= "events">
          <a href= "/Events">Events</a>
        </li>
      </ul>
    </nav>
  )
}