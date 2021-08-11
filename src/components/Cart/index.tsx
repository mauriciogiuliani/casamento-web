import { faTrash, faShoppingBag, faShoppingCart, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Gift } from '../Presente';
import './styles.css';


export interface CartProperties {
    gifts: Gift[];
}

const Cart: React.FC<CartProperties> = ({ gifts }) => {

    const [isOpened, setIsOpened] = useState(false);

    function openCart() {
        setIsOpened(true);
    }

    function closeCart() {
        setIsOpened(false);
    }

    return (

        <div>

            {/* Cart Icon  */}
            <div className={isOpened ? 'carrinho-box-hidden' : 'carrinho-box'} onClick={openCart}>
                <div className="carrinho-items">

                    {gifts.filter(gift => gift.quantidade > 0).length == 0 ? 0 :
                        gifts.filter(
                            gift => gift.quantidade > 0).map(
                                gift => {
                                    return gift.quantidade;
                                }).reduce((total, next) => total + next)
                    }

                </div>
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </div>


            <div className={isOpened ? 'cart-opened-overlay' : ''}></div>


            <div className={isOpened ? 'cart-opened' : 'cart-closed'}>
                {/* <div id="cart-opened-overlay"></div> */}
                <div className="cart-header">
                    Carrinho de Presentes
                </div>

                <div className="cart-items">

                    <li className="cart-items-header">
                        <ul>
                            Qtd
                        </ul>
                        <ul>
                            Descrição
                        </ul>
                        <ul>
                            Valor
                        </ul>
                    </li>

                    {gifts.filter(gift => gift.quantidade > 0).length > 0 ?
                        gifts.map((gift, index) => {
                            if (gift.quantidade > 0) {
                                return (
                                    <li key={index} className='cart-items-list'>
                                        <ul>{gift.quantidade} </ul>
                                        <ul>{gift.nome} </ul>
                                        <ul>R$ {gift.valor},00 </ul>
                                    </li>)
                            }
                        }) :

                        <div className="cart-items-empty">
                            Carrinho Vazio
                        </div>


                    }

                    <div className="cart-items-list-total">
                        Total R$ {


                            gifts.map(gift => {
                                return gift.valor * gift.quantidade;
                            }).reduce((total, next) => total + next)
                        },00
                    </div>
                </div>


                <div className="cart-footer">


                    {gifts.filter(gift => gift.quantidade > 0).length > 0 ?
                        <div className="cart-footer-actions">
                            <a>
                                <FontAwesomeIcon icon={faTrash} size="1x" />
                                Esvaziar
                            </a>

                            <a>
                                <FontAwesomeIcon icon={faShoppingBag} size="1x" />
                                Finalizar
                            </a>
                        </div>
                        : ''
                    }


                    <div className="cart-footer-close">
                        <FontAwesomeIcon icon={faTimesCircle} size="2x" onClick={closeCart} />

                        {/* <p className="fechar-link" onClick={closeCart}> */}


                        {/* </p> */}
                    </div>

                    {/* <div className="carrinho-opened-actions">
                        <div className="carrinho-opened-actions-esvaziar">
                            <FontAwesomeIcon icon={faShoppingBag} size="1x" />
                            Esvaziar
                        </div>

                        <div className="carrinho-opened-actions-finalizar" onClick={closeCart}>
                            <FontAwesomeIcon icon={faShoppingBag} size="1x" />
                            Finalizar
                        </div>



                    </div> */}
                </div>




                {/* </div> */}



                {/* <div className="carrinho-opened-presentes">
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
                            {gifts.map((gift, index) => {
                                return (
                                    <li key={index} className='carrinho-opened-presentes-item'>
                                        <ul>{gift.quantidade} </ul>
                                        <ul>{gift.nome} </ul>
                                        <ul>{gift.valor} </ul>
                                    </li>)
                            })}



                            {/* <div className="carrinho-opened-presentes-item-quantidade">
                                2
                            </div>
                            <div className="carrinho-opened-presentes-item-descricao">
                                Passeio de Barco
                            </div>
                            <div className="carrinho-opened-presentes-item-total">
                                200,00
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


                    </div> */}



            </div>
        </div>








    );
}


export default Cart;