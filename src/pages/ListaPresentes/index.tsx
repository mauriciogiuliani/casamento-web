import { faArrowLeft, faShoppingBag, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createContext, useState } from 'react';
import Cart from '../../components/Cart';
import Presente, { Gift } from '../../components/Presente';
import listaDePresentes from './presentes.json';
import './styles.css';






function ListaPresentes() {
    // const listaPresentes = createContext(listaDePresentes);



    // let giftList: Gift[] = listaDePresentes;

    const [giftList, setGiftList] = useState<Gift[]>(listaDePresentes);

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



    function addGiftToCart(giftName: string) {
        setGiftList(giftList.map(gift => {
            if (gift.nome === giftName) {
                gift.quantidade = gift.quantidade + 1;
            }
            return gift;
        }));

        // (newGiftList);
    }

    function removeGiftFromCart(giftName: string) {
        setGiftList(giftList.map(gift => {
            if (gift.nome === giftName && gift.quantidade > 0) {
                gift.quantidade = gift.quantidade - 1;
            }

            return gift;
        }));
    }

    return (
        <div className={cartOpened ? 'no-scroll' : ''}>
            <p className="main-text">
                Em nossa Lua de Mel iremos para Ilhabela / SP.
            </p>
            {/* 
            <a onClick={() =>
                giftList.map
            }>
                
            </a> */}

            {
                giftList.map((gift, index) => {
                    return (
                        <Presente
                            key={index}
                            gift={gift}
                            addGiftToCart={() => addGiftToCart(gift.nome)}
                            removeGiftFromCart={() => removeGiftFromCart(gift.nome)}
                        />
                    )
                })
            }



            < Cart key="" gifts={giftList} />


            {/* <div className={alertClass}>
                <div className="alert-adicionar-item">
                    <FontAwesomeIcon icon={faCheck} size="3x" />

                    <p>
                        Presente adicionado ao Carrinho!
                    </p>

                </div>
            </div> */}



        </div>







    );
}

export default ListaPresentes;
