import { faShoppingCart, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles.css';

import passeioDeBarcoImb from '../../assets/presentes/passeio-de-barco.png'




function ListaPresentes() {
    return (


        <div>
            <p className="main-text">
                Em nossa Lua de Mel iremos para Ilhabela / SP.
            </p>

            <div className="presente-box">
                <div className="presente-header">
                    Passeio de Barco
                </div>
                <div className="presente-foto">
                    <img src={passeioDeBarcoImb} alt="Passeio de Barco" />
                </div>
                <div className="presente-valor">
                    R$ 100,00
                </div>
                <a>
                    <div className="presente-actions" >
                        <FontAwesomeIcon icon={faPlusCircle} size="1x" /> Adicionar
                    </div>
                </a>
            </div>



            <div className="presente-box">
                <div className="presente-header">
                    Passeio de Barco
                </div>
                <div className="presente-foto">
                    <img src={passeioDeBarcoImb} alt="Passeio de Barco" />
                </div>
                <div className="presente-valor">
                    R$ 100,00
                </div>
                <a>
                    <div className="presente-actions" >
                        <FontAwesomeIcon icon={faPlusCircle} size="1x" /> Adicionar
                    </div>
                </a>
            </div>

        </div>



    );
}

export default ListaPresentes;
