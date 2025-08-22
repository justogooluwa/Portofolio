import Tutorial from './Pages/Portofolio'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Pages/Navbar/Navbar';
import './App.css'

function App() {
 

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Tutorial/>}/>
      </Routes>
      </Router>  
    </>
  )
}

export default App
