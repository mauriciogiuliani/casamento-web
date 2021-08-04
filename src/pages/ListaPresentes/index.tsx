import { faCheck, faPlusCircle, faMinusCircle, faShoppingBag, faShoppingCart, faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import passeioDeBarcoImb from '../../assets/presentes/passeio-de-barco.png';
import './styles.css';





function ListaPresentes() {
    // TEMP
    const [presenteCount, setPresenteCount] = useState(0);

    const addPresente = () => {
        setPresenteCount(presenteCount + 1);
        setCarrinhoSize(carrinhoSize + 1);
    }

    const removePresente = () => {
        if (presenteCount > 0) {
            setPresenteCount(presenteCount - 1);
        }

    }


    const [carrinhoSize, setCarrinhoSize] = useState(0);
    const [alertClass, setAlertClass] = useState('alert-closed');

    const [cartClass, setCartClass] = useState('carrinho-closed');

    const [cartOpened, setCartOpened] = useState(false);


    // Carrinho Box
    const [cartButtonClass, setCartButtonClass] = useState('carrinho-box');


    const openCart = () => {
        setCartClass('carrinho-opened');
        setCartButtonClass('carrinho-box-hidden')
        setCartOpened(true);
    }

    const closeCart = () => {
        setCartClass('carrinho-closed');
        setCartButtonClass('carrinho-box')
        setCartOpened(false);
    }

    const addToCart = () => {
        // setAlertClass('alert-opened');
        setCarrinhoSize(carrinhoSize + 1);

        // setTimeout(() => {
        //     setAlertClass('alert-closed');
        // }, 2000)
    }

    return (
        <div className={cartOpened ? 'no-scroll' : ''}>
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


                <div className="presente-actions">
                    <FontAwesomeIcon icon={faMinusCircle} size="1x" onClick={removePresente} />
                    {presenteCount}
                    <FontAwesomeIcon icon={faPlusCircle} size="1x" onClick={addPresente} />
                </div>
            </div>



            {/* <div className="presente-box">
                <div className="presente-header">
                    Jantar Romântico
                </div>
                <div className="presente-foto">
                    <img src={passeioDeBarcoImb} alt="Passeio de Barco" />
                </div>
                <div className="presente-valor">
                    R$ 100,00
                </div>


                <div className="presente-actions">
                    <FontAwesomeIcon icon={faPlusCircle} size="1x" /> Adicionar
                </div>
            </div> */}


            <br></br>
            <br></br>
            <br></br>
            <br></br>






            <div className={cartButtonClass} onClick={openCart}>
                <div className="carrinho-items">
                    {carrinhoSize}
                </div>
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </div>


            {/* <div className={alertClass}>
                <div className="alert-adicionar-item">
                    <FontAwesomeIcon icon={faCheck} size="3x" />

                    <p>
                        Presente adicionado ao Carrinho!
                    </p>

                </div>
            </div> */}



            <div className={cartClass}>
                <div className="carrinho-opened-box">
                    <div className="carrinho-opened-header">

                        Carrinho de Presentes
                    </div>

                    <div className="carrinho-opened-presentes">
                        <div className="carrinho-opened-presentes-item-header">


                            <h3>
                                Qtd
                            </h3>

                            <h3>
                                Descrição
                            </h3>

                            <h3>
                                Valor
                            </h3>
                        </div>

                        <div className="carrinho-opened-presentes-items">
                            <div className="carrinho-opened-presentes-item">
                                <div className="carrinho-opened-presentes-item-quantidade">
                                    2
                                </div>
                                <div className="carrinho-opened-presentes-item-descricao">
                                    Passeio de Barco
                                </div>
                                <div className="carrinho-opened-presentes-item-total">
                                    200,00
                                </div>
                            </div>


                            <div className="carrinho-opened-presentes-item">
                                <div className="carrinho-opened-presentes-item-quantidade">
                                    2
                                </div>
                                <div className="carrinho-opened-presentes-item-descricao">
                                    Passeio de Barco
                                </div>
                                <div className="carrinho-opened-presentes-item-total">
                                    200,00
                                </div>
                            </div>


                            <div className="carrinho-opened-presentes-item">
                                <div className="carrinho-opened-presentes-item-quantidade">
                                    2
                                </div>
                                <div className="carrinho-opened-presentes-item-descricao">
                                    Passeio de Barco
                                </div>
                                <div className="carrinho-opened-presentes-item-total">
                                    200,00
                                </div>
                            </div>


                            <div className="carrinho-opened-presentes-item">
                                <div className="carrinho-opened-presentes-item-quantidade">
                                    2
                                </div>
                                <div className="carrinho-opened-presentes-item-descricao">
                                    Passeio de Barco
                                </div>
                                <div className="carrinho-opened-presentes-item-total">
                                    200,00
                                </div>
                            </div>
                            <div className="carrinho-opened-presentes-item">
                                <div className="carrinho-opened-presentes-item-quantidade">
                                    2
                                </div>
                                <div className="carrinho-opened-presentes-item-descricao">
                                    Passeio de Barco
                                </div>
                                <div className="carrinho-opened-presentes-item-total">
                                    200,00
                                </div>
                            </div>
                            <div className="carrinho-opened-presentes-item">
                                <div className="carrinho-opened-presentes-item-quantidade">
                                    2
                                </div>
                                <div className="carrinho-opened-presentes-item-descricao">
                                    Passeio de Barco
                                </div>
                                <div className="carrinho-opened-presentes-item-total">
                                    200,00
                                </div>
                            </div>



                        </div>

                        <div className="carrinho-opened-presentes-items-footer">
                            Total R$ 500,00
                        </div>

                    </div>

                    <div className="carrinho-opened-actions">
                        <div className="carrinho-opened-actions-esvaziar">
                            <FontAwesomeIcon icon={faTrash} size="1x" />
                            Esvaziar
                        </div>

                        <div className="carrinho-opened-actions-finalizar" onClick={closeCart}>
                            <FontAwesomeIcon icon={faShoppingBag} size="1x" />
                            Finalizar
                        </div>


                    </div>

                    <p className="fechar-link" onClick={closeCart}>
                        <FontAwesomeIcon icon={faArrowLeft} size="sm" />
                        Voltar
                    </p>

                    <br></br>

                </div>
            </div>
        </div>







    );
}

export default ListaPresentes;
