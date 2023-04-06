//Hooks
import { useEffect, useState } from "react";

//1 Componentes 
import Header from "./ui/components/Header/Header.js"

//1.1 Componentes de Produtos
import Acai from "./ui/components/Produtos/Acai";
import Bebidas from "./ui/components/Produtos/Bebidas";
import Lanches from "./ui/components/Produtos/Lanches";
import Pasteis from "./ui/components/Produtos/Pasteis";
import Pizza from "./ui/components/Produtos/Pizza";
import Pratos from "./ui/components/Produtos/Pratos";
import Salgados from "./ui/components/Produtos/Salgados";
import Sobremesas from "./ui/components/Produtos/Sobremesas";
import TapiocaDoce from "./ui/components/Produtos/TapiocaDoce";
import TapiocaSalgadas from "./ui/components/Produtos/TapiocaSalgada";

// Importação da estilização cardapio.css.
import './ui/styles/Cardapio.css';
import './ui/styles/reset.css';


function Cardapio() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header/>
      <div className='container view'>
        {/* Botões laterias que facilitam a procura por itens do cardápio */}
        <div className='caixa nav'>
            <div className='links navbar'>
                <a className="page" onClick={() => handleButtonClick('salgados')} >Salgado</a>
                <a className="page" onClick={() => handleButtonClick('lanches')}>Lanches</a>
                <a className="page" onClick={() => handleButtonClick('bebidas')}>Bebidas</a>
                <a className="page" onClick={() => handleButtonClick('pasteis')}>Pasteis</a>
                <a className="page" onClick={() => handleButtonClick('pizzas')}>Pizzas</a>
                <a className="page" onClick={() => handleButtonClick('tapiocasalgada')}>Tapioca-Salgada</a>
                <a className="page" onClick={() => handleButtonClick('tapiocadoce')}>Tapioca-Doce</a>
                <a className="page" onClick={() => handleButtonClick('sobremesas')}>Sobremesas</a>
                <a className="page" onClick={() => handleButtonClick('acai')}>Açaí</a>
                <a className="page" onClick={() => handleButtonClick('pratos')}>Pratos</a>
            </div>
        </div>
        <div className='card'>
          
          {currentPage === 'home' && <Salgados /> || currentPage === 'salgados' && <Salgados />}
          {currentPage === 'lanches' && <Lanches />}
          {currentPage === 'bebidas' && <Bebidas />}
          {currentPage === 'pasteis' && <Pasteis />}
          {currentPage === 'pizzas' && <Pizza />}
          {currentPage === 'tapiocasalgada' && <TapiocaSalgadas />}
          {currentPage === 'tapiocadoce' && <TapiocaDoce />}
          {currentPage === 'sobremesas' && <Sobremesas />}
          {currentPage === 'acai' && <Acai />}
          {currentPage === 'pratos' && <Pratos />}
        </div>
      </div>
    </div>
  );
}

export default Cardapio;