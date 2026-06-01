import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext'; // Importando o novo contexto

export default function Produtos() {
    const { adicionarAoBau } = useContext(CartContext);
    const { produtos } = useContext(ProductContext); // Pegando os produtos globais

    return (
        <section className="conteudo-principal paper-bg">
            <h2 className="contato-titulo">Arsenal do Armazém</h2>
            <p className="contato-descricao">Equipamentos, artefatos e suprimentos para sua próxima aventura.</p>

            <div className="produtos-grid">
                {produtos.map((item) => (
                    <div className="produto-card stone-border" key={item.id}>
                        <img src={`/images/icons/${item.img}`} alt={item.nome} className="produto-icone" />
                        <h3 className="produto-nome">{item.nome}</h3>
                        <p className="produto-desc">{item.desc}</p>
                        <div className="produto-preco">
                            <img src="/images/icons/moeda.svg" alt="Moedas" className="moeda-icone" /> {item.preco}
                        </div>
                        <button className="btn-comprar btn-adicionar wood-border" onClick={adicionarAoBau}>
                            Adicionar ao Baú
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}