import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.png';
import cordas from '../../assets/test1.png';

function Landing() {
    return (

        <div className="App">
            <header className="header">
                {/* <img src={logo} alt="Plataforma de estudos" /> */}

                <p className="header-logo-text">
                    Alice e Mauricio
                </p>

                <img src={cordas} className="cordasImg" />

            </header>

            <main className="main">
                <p className="main-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe suscipit voluptatum voluptas perspiciatis atque soluta, blanditiis asperiores, repellendus quam sed obcaecati commodi et dicta tenetur quae. Eveniet, iusto aut?
                </p>

                <div className="options">
                    <Link to="" className="option-link">
                        Confirmar Presença
                    </Link>

                    <Link to="" className="option-link">

                        Lista de Presentes

                    </Link>
                </div>


            </main>
        </div>
    );
}

export default Landing;
