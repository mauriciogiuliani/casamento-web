import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import passeioDeBarcoImb from '../../assets/presentes/passeio-de-barco.png';
import './styles.css';


export interface Gift {
    nome: string;
    valor: number;
    imagem: string;
    quantidade: number;
}

export interface GiftProps {
    gift: Gift
    addGiftToCart: Function;
    removeGiftFromCart: Function;
}


// function setGift()
// function addGift() {

// }

// function removeGift() {

// }

const Presente: React.FC<GiftProps> = (props) => {

    // const [gift, setGift] = useState<Gift>({
    //     nome: props.gift.nome,
    //     valor: props.gift.valor,
    //     imagem: props.gift.imagem,
    //     quantidade: 0
    // });


    return (
        <div className="presente-box">
            <div className="presente-header">
                {props.gift.nome}
            </div>
            <div className="presente-foto">
                <img src={passeioDeBarcoImb} alt="Passeio de Barco" />

                {/* <img src={imagem} alt="Passeio de Barco" /> */}
            </div>
            <div className="presente-valor">
                R$ {props.gift.valor},00
            </div>


            <div className="presente-actions">
                <FontAwesomeIcon
                    icon={faMinusCircle}
                    size="1x"
                    onClick={() => props.removeGiftFromCart()}
                />

                {props.gift.quantidade}

                <FontAwesomeIcon
                    icon={faPlusCircle}
                    size="1x"
                    onClick={() => props.addGiftToCart()}
                />


            </div>
        </div>


    );
}

export default Presente;
