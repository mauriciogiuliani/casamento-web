import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function Presence() {
    return (


        <main className="main">
            <p className="main-text">
                Confirme sua presença abaixo ou entre em contato com a cerimonialista por meio de What's App ou E-mail
            </p>

            <div className="contatos-box">

                <p>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    (51) 99165-1225
                    <br></br>
                    <FontAwesomeIcon icon={faEnvelope} />
                    severinas.ceremonial@gmail.com
                </p>
            </div>


            <div className="input-block">
                <label>Nome Completo</label>
                <input type="text" id="nomeCompletoConvidado" />
            </div>

            <div className="actions-box">
                <Link to="/" className="voltar-link">
                    Voltar
                </Link>

                <Link to="" className="confimar-link">
                    Confirmar
                </Link>
            </div>


        </main>




    );
}

export default Presence;
