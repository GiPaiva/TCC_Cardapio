import React, {useEffect, useState} from 'react';
import '../../styles/Cardapio.css';
import { getProductsByCategory } from '../../../api/api';

export default function Salgados() {
    const [products, setProducts] = useState([]);
    const categoria = 'bebidas';

    useEffect(() => {
        const fetchData = async () => {
        const data = await getProductsByCategory(categoria);
        setProducts(data);
        };
        fetchData();
    }, [categoria]);


    return (
        <div>
            <div className='esquerda'>
                <div className='categoria-caixa'>
                <div>
                    <p className='categoria-titulo'> Bebidas </p>
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
        </div>
    )
}