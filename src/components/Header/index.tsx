import React from 'react';
import cordas from '../../assets/test1.png';
import './styles.css';


function Header() {
    return (

            <header className="header">

                <p className="header-logo-text">
                    Alice e Mauricio
                </p>

                <img src={cordas} alt="Imagem" className="cordasImg" />

            </header>


    );
}

export default Header;
