import React, { useEffect } from "react";
import img_1 from "../../assets/nossa-historia1.jpeg";
import img_2 from "../../assets/nossa-historia2.jpeg";
import img_3 from "../../assets/nossa-historia3.jpeg";
import "./styles.css";


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

      <img src={img_1} alt="Nossa Historia" />

      <p>
        Fomos nos conhecendo e nos apaixonando, cada um com seu jeito e sua
        personalidade - Maurício o mais falante, mais racional e espontâneo.
        Alice, mais emocional, mais pragmática, a que pensa e avalia cada
        detalhe. Cada um com seu jeito, mas de forma complementar. Afinal, dizem
        que opostos de atraem, né? Pode até ser verdade, mas com certeza o que
        nos une são nossas semelhanças, nosso amor e nosso compromisso um com o
        outro.
      </p>
      <img src={img_2} alt="Nossa Historia" />
      <p>
        A vontade de somar um na vida do outro só
        aumenta, e por isso decidimos passar para essa nova fase das nossas
        vidas com a oficialização da nossa união e a celebração do nosso amor.
        Agradecemos muito por cada um que nos acompanha nessa nossa jornada!
        
        </p>

        <img src={img_3} alt="Nossa Historia" />
        
        <p>Com carinho,
            <br></br>
            Alice e Maurício
        </p>
         
        
      
    </div>
  );
}

export default NossaHistoria;
