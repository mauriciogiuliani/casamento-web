import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Landing() {
    return (

        <div className="App">
            

            <main className="main">
                <p className="main-text">
                    Uma nova fase de nossas vidas irá iniciar e existem pessoas que consideramos especiais para compartilhar conosco tantos momentos que virão. Por isso sua presença é muito importante para nós.
                </p>

                <div className="options">
                    <Link to="Presenca" className="option-link">
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
