import { Link } from "react-router-dom"
import { CopoEstilo } from "./style"
import copinhoLaranja from "../../assets/images/laranja 3.png"
import copinhoVermelho from "../../assets/images/vermelho 1.png"
import copinhoAmarelo from "../../assets/images/amarelo 1.png"

export default function Copos(){
    return(
        <section>

          <Link to = "/" >  <CopoEstilo src= {copinhoLaranja} alt="" /> </Link>

          <Link to = "/home2" >  <CopoEstilo src= {copinhoVermelho} alt="" /> </Link>

          <Link to = "/home3" >  <CopoEstilo src= {copinhoAmarelo} alt="" /> </Link>

        </section>
    )
}