import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () =>
     setMenuOpen(!menuOpen);
    return(
        <>
        <div className="navbar">
            <div className="name">
                <span>Ogooluwa</span>
            </div>
            <div className="link">
            <div className="github">
                <a>GitHub</a>
            </div>
            <div className="linkedln">
                <a>Linkedln</a>
            </div>
            <div className="email">
                <a>Email</a>
            </div>
            </div>
             <div className="bars" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>

         <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Email</a>
      </div>
        </>
    )
}

export default Navbar;