import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import passeioDeBarcoImb from '../../../public/presentes/';
import './styles.css';


interface PresenteProps {
    nome: string;
    valor: string;
    imagem: string;
    quantidade: number;

}

const Presente: React.FC<PresenteProps> = ({ nome, valor, imagem, quantidade}) => {
    
    return (

        <div className="presente-box">
            <div className="presente-header">
                {nome}
            </div>
            <div className="presente-foto">
                <img src={imagem} alt="Passeio de Barco" />
            </div>
            <div className="presente-valor">
                R$ {valor},00
            </div>


            <div className="presente-actions">
                <FontAwesomeIcon icon={faMinusCircle} size="1x" />
                    {quantidade}
                <FontAwesomeIcon icon={faPlusCircle} size="1x" />
            </div>
        </div>


    );
}


export default Presente;
