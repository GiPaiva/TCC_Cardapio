import React, {useEffect, useState} from 'react';
import '../../styles/Cardapio.css';
import { getProductsByCategory } from '../../../api/api';

export default function Pratos() {
    const [products, setProducts] = useState([]);
    const [products2, setProducts2] = useState([]);
    const categoria1 = 'pratosprontos';
    const categoria2 = 'porquilo';

    useEffect(() => {
        const fetchData = async () => {
        const data = await getProductsByCategory(categoria1);
        setProducts(data);
        };
        fetchData();
    }, [categoria1]);


    useEffect(() => {
        const fetchData = async () => {
        const data = await getProductsByCategory(categoria2);
        setProducts2(data);
        };
        fetchData();
    }, [categoria2]);

    

    return (
        <div>
            <div className='meio'>
                <div className='meio-pratos'>
                  <div className="body-detalhesD">
                    <div className="body-detalhes-div1"></div>
                    <div className="body-detalhes-div3"></div>
                    <div className="body-detalhes-div2"></div>
                  </div>
                  <p className='pratos' id='pratos'>Pratos</p>
                  <div className="body-detalhes">
                    <div className="body-detalhes-div3"></div>
                    <div className="body-detalhes-div1"></div>
                    <div className="body-detalhes-div2"></div>
                  </div>
                </div>

                <div className='esquerda'>
                    <div className='categoria-caixa'>
                        <div>
                            <p className='categoria-titulo'> Pratos Prontos</p>
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
                                {products.length > 0 ? (
                                    <div>
                                        {products.map((uDados) => (
                                            <tr>
                                                <div className='col-area'>
                                                    <td className='col produto'>{uDados.nome}</td>
                                                    <td className='col texto'>{uDados.descricao}</td>
                                                </div>
                                                <td className='col produto-preco'>R$ {uDados.preco}</td>
                                            </tr>
                                        ))}
                                    </div>
                                ) : (
                                    <tr>
                                        <td className='col produto'>Produtos não disponiveis</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='direita'>
                    <div className='categoria-caixa'>
                        <div className="body-detalhesD">
                            <div className="body-detalhes-div3"></div>
                            <div className="body-detalhes-div1"></div>
                            <div className="body-detalhes-div2"></div>
                        </div>
                        <div>
                            <p className='categoria-titulo'>Por Quilo</p>
                        </div>
                    </div>
                    <div className='lista'>
                        <table className='lista-produto'>
                            <tbody>
                                {products2.length > 0 ? (
                                    <div>
                                        {products2.map((uDados) => (
                                            <tr>
                                                <div className='col-area'>
                                                    <td className='col produto'>{uDados.nome}</td>
                                                    <td className='col texto'>{uDados.descricao}</td>
                                                </div>
                                                <td className='col produto-preco'>R$ {uDados.preco}</td>
                                            </tr>
                                        ))}
                                    </div>
                                ) : (
                                    <tr className='col-area-direita'>
                                        <td className='col produto-direita'>Produtos não disponiveis</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}