import { faPlusCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import passeioDeBarcoImb from '../../assets/presentes/passeio-de-barco.png';
import './styles.css';





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
                <Link to="/">
                    <div className="presente-actions" >
                        <FontAwesomeIcon icon={faPlusCircle} size="1x" /> Adicionar
                    </div>
                </Link>
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
                <Link to="/">
                    <div className="presente-actions" >
                        <FontAwesomeIcon icon={faPlusCircle} size="1x" /> Adicionar
                    </div>
                </Link>
            </div>


            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* <div className="voltar-link">
                <Link to="/">
                    <FontAwesomeIcon icon={faArrowLeft} size="sm" />
                    Voltar
                </Link>
            </div> */}




            <Link to="/">
                <div className="carrinho-box">
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                </div>
            </Link>
        </div>





    );
}

export default ListaPresentes;
