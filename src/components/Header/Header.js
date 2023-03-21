import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';



function Header() {

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 10) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    
    window.addEventListener('scroll', changeColor)


    return (


        <nav className={color ? "navbar navbar-opaque navbar-expand-lg navbar-light bg-light sticky-top" : "navbar navbar-trans navbar-expand-lg navbar-light bg-light sticky-top"}>
            <div className="container-fluid">
                <a className={color ? "navbar-brand brand-opaque" : "navbar-brand brand-trans"} href="#">FaveBall</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav justify-content-center">
                        <li className={color ? "nav-item brand-opaque" : "nav-item brand-trans"}>
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className={color ? "nav-item brand-opaque" : "nav-item brand-trans"}>
                            <a className="nav-link" href="#">Summary</a>
                        </li>
                        <li className={color ? "nav-item brand-opaque" : "nav-item brand-trans"}>
                            <a className="nav-link" href="#">Saved Teams</a>
                        </li>
                        <li className={color ? "nav-item brand-opaque" : "nav-item brand-trans"}>
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header