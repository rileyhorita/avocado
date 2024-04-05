import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import './App.css';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
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
