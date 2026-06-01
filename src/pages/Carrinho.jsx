import { Link } from 'react-router-dom';

export default function Carrinho() {
    return (
        <section className="conteudo-principal paper-bg">
            <h2 className="contato-titulo">Inventário de Compra</h2>
            <p className="contato-descricao">Confira os artefatos que você selecionou antes de finalizar a troca.</p>

            <table className="tabela-bau">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Artefato</th>
                        <th>Qtd</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/icons/pocao_vermelha.svg" alt="Poção" className="moeda-icone" /></td>
                        <td>Poção de Cura</td>
                        <td>2</td>
                        <td>50 <img src="/images/icons/moeda.svg" className="moeda-icone-p" alt="Ouro" /></td>
                    </tr>
                    <tr>
                        <td><img src="/images/icons/adaga_prata.svg" alt="Espada" className="moeda-icone" /></td>
                        <td>Espada Larga</td>
                        <td>1</td>
                        <td>250 <img src="/images/icons/moeda.svg" className="moeda-icone-p" alt="Ouro" /></td>
                    </tr>
                    <tr>
                        <td><img src="/images/icons/arco_flecha.svg" alt="Arco" className="moeda-icone" /></td>
                        <td>Arco de Caça</td>
                        <td>1</td>
                        <td>180 <img src="/images/icons/moeda.svg" className="moeda-icone-p" alt="Ouro" /></td>
                    </tr>
                    <tr>
                        <td><img src="/images/icons/pocao_verde.svg" alt="Veneno" className="moeda-icone" /></td>
                        <td>Frasco de Veneno</td>
                        <td>1</td>
                        <td>40 <img src="/images/icons/moeda.svg" className="moeda-icone-p" alt="Ouro" /></td>
                    </tr>
                    <tr>
                        <td><img src="/images/icons/cristal_azul.svg" alt="Gema" className="moeda-icone" /></td>
                        <td>Safira Mística</td>
                        <td>2</td>
                        <td>1200 <img src="/images/icons/moeda.svg" className="moeda-icone-p" alt="Ouro" /></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" style={{ textAlign: 'right', fontWeight: 'bold', paddingTop: '20px' }}>Custo Total da Missão:</td>
                        <td className="total-valor" style={{ paddingTop: '20px' }}>1720 <img src="/images/icons/moeda.svg" className="moeda-icone-p" alt="Ouro" /></td>
                    </tr>
                </tfoot>
            </table>

            <div className="container-botao" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>
                <Link to="/produtos" className="btn-comprar madeira" style={{ textDecoration: 'none', padding: '10px 20px' }}>Continuar Saque</Link>
                <a href="#" className="btn-comprar madeira" style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: '#5c1606' }}>Finalizar Troca</a>
            </div>
        </section>
    );
}