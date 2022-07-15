import React, { useEffect } from "react";
import img_1 from "../../assets/21UmPoucoSobreNos.jpg";
import img_2 from "../../assets/22UmPoucoSobreNos.jpeg";
import img_3 from "../../assets/23UmPoucoSobreNos.jpg";
import img_4 from "../../assets/24UmPoucoSobreNos.jpg";
import img_5 from "../../assets/25UmPoucoSobreNos.jpg";
import "./styles.css";


function NossaHistoria() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="nossa-historia">
      <p>
      Naquele dia 27/12/14 eles nem imaginavam que um dia estariam assim... Quer dizer, a Ana não imaginava, mas o Fred sim! Diz ele que comentou com um amigo “Vou casar com essa mulher”. Ele sempre diz “Eu vim do futuro!”... dessa vez ele veio mesmo e acertou, vai ter casamento!
      </p>
      <img src={img_1} alt="Nossa Historia" title="Um cheiro na flor, outro no cangote..." />
      <p>
      Pouco tempo depois que se conheceram, o Fred convidou a Ana para passar o carnaval de 2015 juntos (o golpe ta aí!...) e na mesma semana ele pede ela em namoro, no dia 22/02/15.
      </p>
      <img src={img_2} alt="Nossa Historia" title='Pensando nos boletos que vão vencer...' />
      <p>
      Anos se passaram e em 2018 foram morar juntos (bem na época de TCC da Ana – coitado do Fred... Mas valeu o test-drive). Vai ano, vem ano, ainda não terminaram sua cobertura! Mas já já vão terminar (eles acreditam ainda que será em breve – coitados...).
      </p>
      <img src={img_3} alt="Nossa Historia" title="Bejin Bejin"/>
      <p>
      Em 2021, contrataram a cerimonialista pois já estavam certos que iriam casar em 2022. E o noivado? Nada... Passou quase 3 meses, já tinham o local, já sabiam como seria o casamento, tinham a lista de convidados e padrinhos encaminhadas, e nada de serem noivos. Até que no dia 22/10/21 o Fred surpreende a Ana, engana ela direitinho e faz o pedido de casamento!
      </p>
      <img src={img_4} alt="Nossa Historia" title="corre vamo sair desse mato logo mulher...."/>
      <p>
      Mesmo não sendo novidade, de tão nervosa, ela o chama de bobalhão várias vezes (Pq? Nem ela sabe, emoção a flor da pele), e não conseguindo tirar o sorriso do rosto, aceita o pedido. Agora é pagar os boletos pra curtir a festa sorrindo no dia do casamento! E que seja leve, alegre, divertido, lindo, como eles ♥
      </p>
      <img src={img_5} alt="Nossa Historia" title="Tu não te bobeia, to de olho!" />
      <p>
      Esperamos por vocês, Ana e Fred.
      </p>

        
      
    </div>
  );
}

export default NossaHistoria;
