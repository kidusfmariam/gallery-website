import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Footer from "./Components/Footer"
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App
