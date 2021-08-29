import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import img from "../../assets/presentes/passeio-de-barco.png";

function NossaHistoria() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="nossa-historia">
      <p>
        Nos conhecemos dia 11/03/2015 no aniversário de uma amiga muito especial
        e desde então as conversas se tornaram diárias, e os encontros mais
        frequentes...
      </p>

      <img src={img} alt="A" />

      <p>
        Fomos nos conhecendo e nos apaixonando, cada um com seu jeito e sua
        personalidade - Maurício o mais falante, mais racional e espontâneo.
        Alice, mais emocional, mais pragmática, a que pensa e avalia cada
        detalhe. Cada um com seu jeito, mas de forma complementar. Afinal, dizem
        que opostos de atraem, né? Pode até ser verdade, mas com certeza o que
        nos une são nossas semelhanças, nosso amor e nosso compromisso um com o
        outro.
      </p>
      <img src={img} alt="A" />
      <p>
        A vontade de somar um na vida do outro só aumenta, e por isso decidimos
        passar para essa nova fase das nossas vidas com a oficialização da nossa
        união - A celebração do nosso amor, junto com as pessoas que são
        especiais na nossa vida
      </p>
    </div>
  );
}

export default NossaHistoria;
