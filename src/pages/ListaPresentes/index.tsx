import React, { useState } from 'react';
import Cart from '../../components/Cart';
import Presente, { Gift } from '../../components/Presente';
import listaDePresentes from './presentes.json';
import img_lista from "../../assets/3ListadePresentes.jpg";
import './styles.css';






function ListaPresentes() {

    const [giftList, setGiftList] = useState<Gift[]>(listaDePresentes);

    function addGiftToCart(giftName: string) {
        setGiftList(giftList.map(gift => {
            if (gift.nome === giftName) {
                gift.quantidade = gift.quantidade + 1;
            }
            return gift;
        }));

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
        <div>
            <p className="main-text">
                <strong>LISTA DE PRESENTES</strong>
                <br/><br/>
                Hora pra ajudar os pobres noivos!!!
            </p>


            <div className="gift-list">
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
            </div>

            < Cart key="" gifts={giftList} />


        </div>








    );
}

export default ListaPresentes;
