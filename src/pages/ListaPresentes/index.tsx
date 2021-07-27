import { faCheck, faPlusCircle, faShoppingBag, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import passeioDeBarcoImb from '../../assets/presentes/passeio-de-barco.png';
import './styles.css';





function ListaPresentes() {
    const [carrinhoSize, setCarrinhoSize] = useState(0);
    const [alertClass, setAlertClass] = useState('alert-closed');

    const [cartClass, setCartClass] = useState('carrinho-closed');

    const openCart = () => {
        setCartClass('carrinho-opened');
    }

    const closeCart = () => {
        setCartClass('carrinho-closed');
    }

    const addToCart = () => {
        setAlertClass('alert-opened');
        setCarrinhoSize(carrinhoSize + 1);

        setTimeout(() => {
            setAlertClass('alert-closed');
        }, 2000)
    }

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


                <div className="presente-actions" onClick={addToCart}>
                    <FontAwesomeIcon icon={faPlusCircle} size="1x" /> Adicionar
                </div>
            </div>



            <div className="presente-box">
                <div className="presente-header">
                    Jantar Romântico
                </div>
                <div className="presente-foto">
                    <img src={passeioDeBarcoImb} alt="Passeio de Barco" />
                </div>
                <div className="presente-valor">
                    R$ 100,00
                </div>


                <div className="presente-actions" onClick={addToCart}>
                    <FontAwesomeIcon icon={faPlusCircle} size="1x" /> Adicionar
                </div>
            </div>


            <br></br>
            <br></br>
            <br></br>
            <br></br>






            <div className="carrinho-box" onClick={openCart}>
                <div className="carrinho-items">
                    {carrinhoSize}
                </div>
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </div>


            <div className={alertClass}>
                <div className="alert-adicionar-item">
                    <FontAwesomeIcon icon={faCheck} size="3x" />

                    <p>
                        Presente adicionado ao Carrinho!
                    </p>

                </div>
            </div>

            <div className={cartClass}>
                <div className="carrinho-opened-box">
                    <div className="carrinho-opened-header">

                        Carrinho de Presentes
                    </div>

                    <div className="carrinho-opened-presentes">
                        B
                    </div>

                    <div className="carrinho-opened-actions">
                        <div className="carrinho-opened-actions-esvaziar">
                            <FontAwesomeIcon icon={faTrash} size="1x" />
                            Esvaziar Carrinho
                        </div>

                        <div className="carrinho-opened-actions-finalizar" onClick={closeCart}>
                            <FontAwesomeIcon icon={faShoppingBag} size="1x" />
                            Finalizar Compra
                        </div>
                    </div>
                </div>
            </div>
        </div>







    );
}

export default ListaPresentes;
