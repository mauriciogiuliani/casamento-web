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
        Terá uma interação com as fotos na festa e com a hashtag ficará fácil achar o registros de todos os momentos lindos desse dia!
        <br/>
        Nas fotos do dia do nosso casamento que postar no feed do Instagram use:
        <br/>
        <strong>#AnaeFred22</strong>
      </p>
      <img src={img_hashtag} alt="Se liga na Aliança Cumpadi!" title="Se liga na Aliança Cumpadi!"/>

    </div>
  );
}

export default HashTag;
