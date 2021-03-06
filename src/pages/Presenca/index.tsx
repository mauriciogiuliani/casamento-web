import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';





function Presenca() {
    useEffect(() => {
        window.scrollTo(0,0);
    });
    

    const whatsAppLink = "https://wa.me/5551991651225?text=" + encodeURI("Olá!\nGostaria de confirmar minha presença para o casamento da Alice e Mauricio.")

    return (


        <div className="main">
            <p className="main-text">
                Confirme sua presença entrando em contato com o cerimionial através de E-mail ou What's App.
            </p>


            <div className="actions-box">
                <a href="mailto:severinas.cerimonial@gmail.com" className="voltar-link">
                    <FontAwesomeIcon icon={faEnvelope} />
                    E-Mail
                </a>


                <a href={whatsAppLink} className="confimar-link">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    What'sApp
                </a>
            </div>

            <div className="contatos-box">

                <p>

                    (51) 99165-1225


                    <br></br>


                    severinas.cerimonial@gmail.com

                    {/* <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowLeft} size="sm" />
                        Voltar
                    </Link> */}

                </p>
            </div>


        </div>




    );
}

export default Presenca;
