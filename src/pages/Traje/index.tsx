import React, { useEffect } from "react";
import img_traje from "../../assets/5Traje.jpg";
import "./styles.css";


function Traje() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="traje">
      <p>
      Aqui vai algumas dicas para ajudar vocês, nossos queridos convidados, a se prepararem para o grande dia.
      <br/><br/>
      <strong>O que vestir?</strong> Traje Passeio / Esporte Fino.
      <br/><br/>
      <strong>O que é isso? </strong>Nem tão formal, nem tão informal. É uma forma de se vestir de maneira mais casual e livremente.
      <br/><br/>
      <u>Ela:</u>
      - O uso de vestido longo é opcional;
      <br/>
      - Lembre-se que a cerimônia começa de dia, recomendamos um look que combine com a leveza do campo, e sapatos com salto grosso, pois teremos um lindo gramado como cenário;
      <br/>
      - Evite: salto fino, cores branco e azul claro;
      <br/>
      - Vestidos midi são bem-vindos e evite as peças em jeans.
      <br/><br/>
      <u>Ele: </u>
      - O uso da gravata é opcional;
      <br/>
      - Recomendamos: terno, blazer ou camisa e calça social;
      <br/>
      - Evite as peças em jeans.
      </p>
      <img src={img_traje} alt="Pega essa elgância" title="Pega essa elgância" />

    </div>
  );
}

export default Traje;
