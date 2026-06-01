import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Header() {
    const { quantidadeNoBau } = useContext(CartContext);

    return (
        <header className="topo madeira">
            <div className="header-topo">
                <div className="logo-container">
                    <h1>Armazém do Viajante</h1>
                </div>

                <div className="carrinho-container">
                    <Link to="/carrinho" className="icone-bau-link">
                        <img src="/images/icons/bau.svg" alt="Baú" className="icone-bau" />
                        <span className="contador-bau" id="contadorBau">
                            {quantidadeNoBau}
                        </span>
                    </Link>
                </div>
            </div>

            <nav className="menu">
                <Link to="/">Início</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/carrinho">Seu Baú</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/admin" style={{ color: '#f1c40f' }}>Ferreiro (Gerenciar)</Link>
            </nav>
        </header>
    );
}