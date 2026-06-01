import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Home() {
    const { adicionarAoBau } = useContext(CartContext);

    return (
        <>
            <section className="noticia papel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '2px dashed #8b5a2b', paddingBottom: '10px', marginBottom: '20px' }}>
                    <img src="/images/coruja.gif" alt="Correio Coruja" style={{ height: '40px', filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))' }} />
                    <h2 style={{ fontFamily: "'MedievalSharp', cursive", margin: 0, fontSize: '2rem', color: '#5c1606' }}>Notícias do Reino</h2>
                </div>

                <article style={{ marginBottom: '15px' }}>
                    <h3 style={{ fontFamily: "'MedievalSharp', cursive", color: '#3e2723', marginBottom: '5px' }}>🔥 Nova Remessa de Poções Chegou!</h3>
                    <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: '#3e2723' }}>Aventureiros, preparem suas bolsas! O Mestre informa que um carregamento fresco de poções de cura e mana chegou das montanhas do Norte. Estoques limitados, corram!</p>
                </article>

                <article>
                    <h3 style={{ fontFamily: "'MedievalSharp', cursive", color: '#3e2723', marginBottom: '5px' }}>⚔️ Espada Larga com Desconto Especial!</h3>
                    <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: '#3e2723' }}>A icônica Espada Larga, favorita dos guerreiros, está com 10% de desconto nesta lua cheia. Venha equipar-se com aço de qualidade antes da sua próxima missão.</p>
                </article>
            </section>

            <section style={{ marginTop: '50px' }}>
                <h2 className="contato-titulo" style={{ textAlign: 'center', marginBottom: '30px', color: '#f3e8d4', textShadow: '2px 2px 4px #000' }}>Produtos em Destaque</h2>
                
                <div className="produtos-grid">
                    <div className="produto-card stone-border">
                        <img src="/images/icons/pocao_vermelha.svg" alt="Poção de Cura" className="produto-icone" />
                        <h3 className="produto-nome">Poção de Cura</h3>
                        <p className="produto-desc">Restaura 30 HP instantaneamente.</p>
                        <div className="produto-preco">
                            <img src="/images/icons/moeda.svg" alt="Moedas" className="moeda-icone" /> 25
                        </div>
                        <a href="#" className="btn-comprar btn-adicionar wood-border" onClick={adicionarAoBau}>Adicionar ao Baú</a>
                    </div>

                    <div className="produto-card stone-border">
                        <img src="/images/icons/adaga_prata.svg" alt="Espada de Aço" className="produto-icone" />
                        <h3 className="produto-nome">Espada Larga</h3>
                        <p className="produto-desc">+15 Dano. Arma confiável de guerreiro.</p>
                        <div className="produto-preco promocao">
                            <span className="preco-antigo">250 <img src="/images/icons/moeda.svg" className="moeda-icone-p" alt="Ouro" /></span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <img src="/images/icons/moeda.svg" alt="Moedas" className="moeda-icone" /> 225
                            </div>
                        </div>
                        <a href="#" className="btn-comprar btn-adicionar wood-border" onClick={adicionarAoBau}>Adicionar ao Baú</a>
                    </div>

                    <div className="produto-card stone-border">
                        <img src="/images/icons/cristal_azul.svg" alt="Safira Mística" className="produto-icone" />
                        <h3 className="produto-nome">Safira Mística</h3>
                        <p className="produto-desc">Material raro para encantar armaduras.</p>
                        <div className="produto-preco">
                            <img src="/images/icons/moeda.svg" alt="Moedas" className="moeda-icone" /> 600
                        </div>
                        <a href="#" className="btn-comprar btn-adicionar wood-border" onClick={adicionarAoBau}>Adicionar ao Baú</a>
                    </div>
                </div>
            </section>
        </>
    );
}