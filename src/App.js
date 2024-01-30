import Home from "./pages/Home"
import Merch from "./pages/Merch"
import { Events } from "./pages/Events"
import Navbar from "./components/Navbar"
import './App.css';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/Merch":
      component = <Merch />
      break
    case "/Events":
      component = <Events />
      break

  } 
    return (
      <>
        <Navbar />
        {component}
      </>
    )
  }

export default App;
