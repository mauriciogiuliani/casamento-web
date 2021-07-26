import { faPlusCircle, faShoppingCart, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import passeioDeBarcoImb from '../../assets/presentes/passeio-de-barco.png';
import './styles.css';





function ListaPresentes() {

    const [carrinhoSize, setCarrinhoSize] = useState(0);

    const [alertClass, setAlertClass] = useState('alert-closed');

    // let alertClass = ';

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
                <a href="#" onClick={
                    () => {
                        setAlertClass('alert-opened');
                        setCarrinhoSize(carrinhoSize + 1);

                        setTimeout(() => {
                            setAlertClass('alert-closed');
                        }, 2000)
                    }
                }>
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
                    <div className="carrinho-items">
                        {carrinhoSize}
                    </div>
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                </div>
            </Link>

            <div className={alertClass}>
                <div className="alert-adicionar-item">
                    <FontAwesomeIcon icon={faCheck} size="3x" />

                    <p>
                        Presente adicionado ao Carrinho!
                    </p>

                </div>
            </div>
        </div>







    );
}

export default ListaPresentes;
