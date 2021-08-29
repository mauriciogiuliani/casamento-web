import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Landing() {
    return (




        <div className="main">
            <p className="main-text">
                Uma nova fase de nossas vidas irá iniciar e existem pessoas que consideramos especiais para compartilhar conosco tantos momentos que virão. Por isso sua presença é muito importante para nós.
            </p>

            <div className="options">
                <Link to="presenca" className="option-link">
                    Confirmar Presença
                </Link>

                <Link to="nossa-historia" className="option-link">
                    Nossa <br></br> História
                </Link>

                <Link to="lista-presentes" className="option-link">
                    Lista de Presentes
                </Link>
            </div>


        </div>

    );
}

export default Landing;
