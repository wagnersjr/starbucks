import { GlobalStyle } from "./Components/GlobalStyle";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Home2 from "./Components/Home2/Home2";
import Home3 from "./Components/Home3/Home3";
import Novidades from "./Components/Novidades/Novidade";
import Sobre from "./Components/Sobre/Sobre";



export default function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home2" element={<Home2/>}/>
      <Route path="/home3" element={<Home3/>}/>
      <Route path="/novidades" element={<Novidades/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}