import React, { useEffect } from "react";
import img_cerimonia from "../../assets/6CerimoniaeFesta.jpg";
import "./styles.css";


function Cerimonia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="cerimonia">
      <p>
        Celebraremos a <u>cerimônia e a festa</u> em um único lugar. Contamos com você para ser ainda mais especial!
        <br/><br/>
        <strong>Marina Pier 340</strong>
        <br/>
        Rua dos Pescadores, 340 - Ilha das Flores, Porto Alegre/RS
        <br/>
        <strong>22 de outubro de 2022 às <u>16:30</u></strong>
      </p>
      
      { /* eslint-disable-next-line */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.5012612132405!2d-51.2675842845755!3d-29.993760081900753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197c7530a18f43%3A0xbf9be57702f3e629!2sMarina%20Pier%20340!5e0!3m2!1spt-BR!2sbr!4v1653427374946!5m2!1spt-BR!2sbr" width="75%" height="500px"></iframe>

      <img src={img_cerimonia} alt="Que foto mais bunita, esses Noivos são umas diliça!"  title='Que foto mais bunita, esses Noivos são umas diliça!'/>
    </div>
  );
}

export default Cerimonia;
