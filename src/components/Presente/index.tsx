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

const Presente: React.FC<GiftProps> = (props) => {

    return (
        <div className="presente-box">
            <div className="presente-header">
                {props.gift.nome}
            </div>
            <div className="presente-foto">
                <img src={props.gift.imagem} alt={props.gift.nome} />
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
