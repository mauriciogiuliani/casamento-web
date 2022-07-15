import React, { useEffect } from "react";
import img_hashtag from "../../assets/4Hashtag.jpg";

import "./styles.css";


function HashTag() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="hashtag">
      <p>
        Fizemos nossa Hashtag! Assim ficará mais fácil achar todas as fotos que compartilharem em suas redes!
        <br/>
        Mas não é só isso, terá uma <u>interação com as fotos que postarem no feed do Instagram</u>.
        <br/>
        Quem não tem Instagram, tá na hora de criar! Brincadeira (não é não heheh)... Terão como interagir também, serão informados no dia da festa como.
        <br/><br/>
        <strong>#AnaeFred22</strong>
      </p>
      <img src={img_hashtag} alt="Se liga na Aliança Cumpadi!" title="Se liga na Aliança Cumpadi!"/>

    </div>
  );
}

export default HashTag;
