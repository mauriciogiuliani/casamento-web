import React, { useEffect } from "react";
import img_1 from "../../assets/21UmPoucoSobreNos.jpg";
import img_2 from "../../assets/22UmPoucoSobreNos.jpg";
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
      Naquele dia 27/12/14 nem imaginavam que um dia estariam assim... Quer dizer, a Ana não imaginava, mas o Fred sim! Diz ele que disse ao amigo “vou casar com essa mulher”. Como ele sempre diz “Eu vim do futuro!” ele veio mesmo dessa vez e acertou, vai ter casamento!
      </p>
      <img src={img_1} alt="Nossa Historia" title="Um cheiro na flor, outro no cangote..." />
      <p>
      Pouco tempo depois que se conheceram, o Fred convidou a Ana para passar o carnaval juntos (o golpe ta aí!...) e na mesma semana ele pede ela em namoro, no dia 22/02/15.
      </p>
      <img src={img_2} alt="Nossa Historia" title='Pensando nos boletos que vão vencer...' />
      <p>
      Anos se passaram e no ano de 2018 foram morar juntos (bem na época de TCC da Ana – coitado do Fred... Mas valeu o test-drive). Vai ano, vem ano, ainda não terminaram sua cobertura! Mas já já vai terminar (eles acreditam ainda que será em breve – coitados...).
      </p>
      <img src={img_3} alt="Nossa Historia" title="Bejin Bejin"/>
      <p>
      Em 2021, contrataram a cerimonialista pois já era certo que iriamos casar em 2022. E o noivado? Nada... Passou quase 3 meses, já tinham o local, já sabiam como seria o casamento, tinha a lista de convidados e padrinhos encaminhadas, e nada de serem noivos. Até que no dia 22/10/21 o Fred surpreende a Ana, engana ela direitinho e faz o pedido de casamento!
      </p>
      <img src={img_4} alt="Nossa Historia" title="Trilha selvagem no meio do mato."/>
      <p>
      Mesmo não sendo novidade, de tão nervosa, ela o chama de bobalhão várias vezes, e não conseguindo tirar o sorriso do rosto, aceita o pedido. Agora é pagar boletos pra curtir a festa sorrindo no dia do casamento! E que seja leve, alegre, divertido, lindo, como eles ♥
      </p>
      <img src={img_5} alt="Nossa Historia" title="Tu não te bobeia, to de olho!" />
      <p>
      Esperamos por vocês, Ana e Fred.
      </p>

        
      
    </div>
  );
}

export default NossaHistoria;
