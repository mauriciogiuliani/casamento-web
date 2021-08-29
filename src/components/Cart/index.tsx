import { faShoppingCart, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import logoPixImg from '../../assets/logo-pix.png';
import { Gift } from '../Presente';
import './styles.css';




export interface CartProperties {
    gifts: Gift[];
}

// export 

const Cart: React.FC<CartProperties> = ({ gifts }) => {

    const [isOpened, setIsOpened] = useState(false);

    function openCart() {
        setIsOpened(true);
    }

    function closeCart() {
        setIsOpened(false);
    }

    function sumTotal(gifts: Gift[]): number {
        return gifts.map(gift => {
            return gift.valor * gift.quantidade;
        }).reduce((total, next) => total + next)
    }


    function isCartEmpty() {
        return gifts.filter(gift => gift.quantidade > 0).length > 0 ? true : false;
    }

    return (

        <div>

            {/* Cart Icon  */}
            <div className={isOpened ? 'carrinho-box-hidden' : 'carrinho-box'} onClick={openCart}>
                <div className="carrinho-items">

                    {gifts.filter(gift => gift.quantidade > 0).length === 0 ? 0 :
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
                <div className="cart">
                    {/* <div id="cart-opened-overlay"></div> */}
                    <div className="cart-header">
                        <h1>
                            Carrinho de Presentes
                        </h1>

                        {/* {isCartEmpty() &&
                            <p>
                                Agradecemos por tornar nossa lua de mel mais especial.
                            </p>
                        } */}
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

                        {isCartEmpty() ?
                            gifts.map((gift, index) => {
                                if (gift.quantidade > 0) {
                                    return (
                                        <li key={index} className='cart-items-list'>
                                            <ul>{gift.quantidade} </ul>
                                            <ul className="cart-item-name">{gift.nome} </ul>
                                            <ul>{gift.valor},00 </ul>
                                        </li>)
                                } else {
                                    return '';
                                }
                            }) :

                            <div className="cart-items-empty">
                                Carrinho Vazio
                            </div>

                        }

                        <div className="cart-items-list-total">
                            Total R$ {sumTotal(gifts)},00
                        </div>
                    </div>


                    <div className="cart-footer">


                        {isCartEmpty() &&
                            <div className="cart-footer-actions">

                                <p>
                                    Faça um Pix para a chave abaixo
                                </p>

                                <div className="cart-footer-pix">
                                    <img src={logoPixImg} alt="Pix" />

                                    <div className="cart-footer-pix-details">
                                        <p>
                                            Mauricio Machado Giuliani
                                        </p>
                                        <p>
                                            <b>CPF:</b> 01177247003
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }


                        <div className="cart-footer-close">
                            <FontAwesomeIcon icon={faTimesCircle} size="2x" onClick={closeCart} />
                        </div>

                    </div>


                </div>

            </div>
        </div>








    );
}


export default Cart;
