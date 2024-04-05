import "./Navbar.css"
export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-title-container">
        <div className="nav-logo">
        </div>
        <img className= "jamimg" src="jamz.png"></img>
      </div>
      <ul>
        <li >Jams</li>
        <li >ID Cards</li>
        <li >Website Redesign</li>
        <li >Personal Websites</li>
        <li >
          <button>Client Project</button>
          </li>
      </ul>
    </nav>
  )
}