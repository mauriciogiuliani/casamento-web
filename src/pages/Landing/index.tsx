import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Landing() {
    return (

        <div className="App">
            

            <main className="main">
                <p className="main-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe suscipit voluptatum voluptas perspiciatis atque soluta, blanditiis asperiores, repellendus quam sed obcaecati commodi et dicta tenetur quae. Eveniet, iusto aut?
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
