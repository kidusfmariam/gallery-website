import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Footer from "./Components/Footer"
import Exhibitions from "./Pages/Exhibitions"
import Artists from "./Pages/Artists"
import ScrollToTop from "./Components/ScrollToTop"
function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/exhibitions" element={<Exhibitions/>}></Route>
          <Route path="/artists" element={<Artists/>}></Route>
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App
