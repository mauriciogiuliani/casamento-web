import React from 'react';
import { Link } from 'react-router-dom';
import img_inicial from "../../assets/0PaginaInicial.jpg";
import './styles.css';

function Landing() {
    return (




        <div className="main">
            <p className="main-text">
            É com muito amor e carinho que convidamos você para estar conosco no nosso casamento. São 7 anos juntos de parceria e não poderíamos deixar de oficializar nosso amor. A contagem regressiva começa junto com o frio na barriga e toda a ansiedade desse dia tão esperado em nossas vidas. Não poderíamos deixar de tê-lo ao nosso lado. Vamos juntos comemorar e curtir esse grande dia!
            </p>

            <div className="options">
                <Link to="presenca" className="option-link">
                    CONFIRME SUA PRESENÇA
                </Link>

                <Link to="nossa-historia" className="option-link">
                    UM POUCO SOBRE NÓS
                </Link>

                <Link to="lista-presentes" className="option-link">
                    LISTA DE PRESENTES
                </Link>

                <Link to="hashtag" className="option-link">
                    #HASHTAG
                </Link>

                <Link to="traje" className="option-link">
                    TRAJE
                </Link>

                <Link to="cerimonia" className="option-link">
                    CERIMÔNIA E FESTA
                </Link>
            </div>
            
            <div id='paginaInicial'>
                <img src={img_inicial} alt="Bem Vindo Ao Casamento da Ana e do Fred" title='Bem Vindo Ao Casamento da Ana e do Fred'/>
            </div>
        
        </div>

    );
}

export default Landing;
