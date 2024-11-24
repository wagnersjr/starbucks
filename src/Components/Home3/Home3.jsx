import { MainStyle, Copo, Section, Info } from "./style";
import Copos from "../Copos/Copos";

export default function Home3() {
    return (
      <MainStyle>
        <Info>
          <h2>Mais que Café</h2>
          <h1>
            Isso é <span>Starbucks</span>
          </h1>
          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </p>
          <button>SAIBA MAIS</button>
          
          <Copos/>

        </Info>

        <Section>
          <Copo
            src="https://github.com/wagnersjr/starbucks/blob/main/src/assets/images/amarelo2x%201.png?raw=true"
            alt=""
          />
          <img className="elipse"
            src="https://github.com/wagnersjr/starbucks/blob/main/src/assets/images/Ellipse%202.png?raw=true"
            alt=""
          />
        </Section>
        
      </MainStyle>
    );

    
}
