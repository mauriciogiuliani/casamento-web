import React from 'react';
import cordas from '../../assets/eucalipto.png';
import './styles.css';



function Header() {
    return (

            <header className="header">
                
                <p className="header-logo-text">
                    ANA & FRED
                </p>

                <img src={cordas} alt="Imagem" className="cordasImg" />

            </header>


    );
}

export default Header;
