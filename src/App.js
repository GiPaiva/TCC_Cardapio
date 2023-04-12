//Hooks
import { useState, useEffect } from "react";
import axios from "axios";

//1 Componentes 
import Header from "./ui/components/Header/Header.js"

// Importação da estilização cardapio.css.
import './ui/styles/Cardapio.css';
import './ui/styles/reset.css';


function Cardapio() {
  const [currentPage, setCurrentPage] = useState('salgados');
  const [products, setProducts] = useState([]);

  // URL BASE
  const API_BASE_URL = 'https://api-cantina-production.up.railway.app/api';
  //Pega os produtos pela categoria, que vem do useEffect, pela condição do currentpage, que estaria ligado ao botão
  const getProductsByCategory = async (categoria) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/produtos/${categoria}`, {
        params:{
          key: '1363dc7316d70ecf0803a4bd24ac15ab'
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  //função do botão
  const handleButtonClick = async (page) => {
    getProductsByCategory(page)
    setCurrentPage(page); 
  };

  //Sem pecualiaridades os dados pegar de acordo com o que vier da função do botão
  useEffect(() => {
      const fetchData = async () => {
      const data = await getProductsByCategory(currentPage);
      setProducts(data);
      };
      fetchData();
  }, [currentPage]);


  
  return (
    <div>
      <Header/>
      <div className='container view'>
        {/* Botões laterias que facilitam a procura por itens do cardápio */}
        <div className='caixa nav'>
            <div className='links navbar'>
                <button className="page" onClick={() => handleButtonClick('salgados')} >Salgado</button>
                <button className="page" onClick={() => handleButtonClick('lanches')}>Lanches</button>
                <button className="page" onClick={() => handleButtonClick('bebidas')}>Bebidas</button>
                <button className="page" onClick={() => handleButtonClick('pasteis')}>Pasteis</button>
                <button className="page" onClick={() => handleButtonClick('pizzas')}>Pizzas</button>
                <button className="page" onClick={() => handleButtonClick('tapiocas salgadas')}>Tapiocas Salgadas</button>
                <button className="page" onClick={() => handleButtonClick('tapiocas doces')}>Tapiocas Doces</button>
                <button className="page" onClick={() => handleButtonClick('sobremesas')}>Sobremesas</button>
                <button className="page" onClick={() => handleButtonClick('pratosprontos')}>Pratos Prontos</button>
                <button className="page" onClick={() => handleButtonClick('porquilo')}>Por Quilo</button>
            </div>
        </div>
        <div className='card'>
            <div className='esquerda'>

                <div className='categoria-caixa'>
                  <div>
                        {/* Uma peculidade em relação a escrita da palavra, 
                          para manter padroes e não enviar ç e acentos para a api/banco, 
                          então mudamos de forma manula */}
                        {
                        (currentPage !== 'tapiocas doces') &&
                        (currentPage !== 'tapiocas salgadas') &&
                        (currentPage !== 'pratosprontos') &&
                        (currentPage !== 'porquilo') && (
                          <p className='categoria-titulo'>{currentPage}</p>
                        )}
                        {currentPage === 'tapiocas doces' &&(
                          <p className='categoria-titulo'>Tapiocas Doces</p>
                        )}
                        {currentPage === 'tapiocas salgadas' &&(
                          <p className='categoria-titulo'>Tapiocas Salgadas</p>
                        )}
                        {currentPage === 'pratosprontos' &&(
                          <p className='categoria-titulo'>Pratos Prontos</p>
                        )}
                        {currentPage === 'porquilo' &&(
                          <p className='categoria-titulo'>Por Quilo</p>
                        )}
                  </div>

                  <div className='body-detalhes'>
                      <div className='body-detalhes-div1'></div>
                      <div className='body-detalhes-div2'></div>
                      <div className='body-detalhes-div3'></div>
                  </div>
                </div>


                <div>
                  <table className='lista-produto'>
                      <tbody>
                        {/*(Se) Caso o array não estiver vazio, verificando pelo tamanho deste */}
                          {products?.length > 0 ? (
                              <div>
                                  {products.map((uDados) => (
                                    <div className='tabela-produto'>
                                      <tr className='col-area'>
                                          <div className='col-texto'>
                                              <td className='col produto'>{uDados.nome}</td>
                                              <td className='col texto'>{uDados.descricao}</td>
                                          </div>
                                          <td className='produto-preco'>R$ {uDados.preco.toFixed(2).replace('.',',')}</td>
                                      </tr>
                                    </div>
                                  ))}
                              </div>
                          ) : (
                            /*(Senão) Caso o array não estiver vazio */
                              <tr>
                                  <td className='col produto'>Produtos não disponiveis</td>
                              </tr>
                          )}
                      </tbody>
                  </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cardapio;