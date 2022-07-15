
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import img_confirma from "../../assets/1ConfirmasuaPresenca.jpeg";
import './styles.css';





function Presenca() {
    useEffect(() => {
        window.scrollTo(0,0);
    });
    

    return (


        <div className="main">
            <p className="main-text">
            Para confirmar a sua presença no casamento, envie um e-mail para <strong>rsvp@murielbernardes.com</strong> até dia <strong>02/10/22</strong>.  
            <br/>
            Assunto do e-mail: Casamento Ana e Fred - 22/10/22
            <br/>
            Corpo do e-mail: Nome Completo
            <br/><br/>
            Será incrível ter você com a gente para sentir ainda mais a emoção desse momento tão especial! Mas entendemos caso não consiga comparecer. <u>Por gentileza, só confirme se tiver certeza que irá.</u>
            <br/><br/>
            <strong><u>Vale Night das crianças!</u></strong><br/>
            Amamos elas, mas <u>não recomendamos levá-las</u>. O evento será na beira do Rio Guaíba e contém uma piscina, não terá ninguém para vigia-los. Caso queira levar, pedimos a gentileza de ficar sempre junto com sua/seu pimpolha/o.
            <br/><br/>
            Se tiver qualquer pergunta ou quer comentar algo, escreva neste mesmo e-mail para nossa cerimonialista Muriel Bernardes, tenho certeza que ela irá te auxiliar da melhor forma.
            </p>

            <div className="actions-box">
                <a href="mailto:rsvp@murielbernardes.com?subject=Casamento Ana e Fred - 22/10/22" className="voltar-link">
                    <FontAwesomeIcon icon={faEnvelope} />
                    E-MAIL
                </a>

            </div>
            <div id="presenca">
                <img src={img_confirma} alt="Deitados no chão... que bonito..." title='Deitados no chão... que bonito...' />
            </div>
        </div>

    );
}

export default Presenca;
