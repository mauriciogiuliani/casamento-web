import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'




function Presence() {
    return (


        <main className="main">
            <p className="main-text">
                Confirme sua presença até o dia <b>10/10/2021</b> entrando em contato com o cerimionial através de E-mail ou What's App.
            </p>


            <div className="actions-box">
                <a href="mailto:severinas.cerimonial@gmail.com" className="voltar-link">
                    <FontAwesomeIcon icon={faEnvelope} />
                    E-Mail
                </a>


                <a href="https://wa.me/5551991651225" className="confimar-link">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    What'sApp
                </a>
            </div>

            <div className="contatos-box">

                <p>

                    (51) 99165-1225


                    <br></br>


                    severinas.cerimonial@gmail.com

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowLeft} size="sm" />
                        Voltar
                    </Link>

                </p>
            </div>


        </main>




    );
}

export default Presence;
