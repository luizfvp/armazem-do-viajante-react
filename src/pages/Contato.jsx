export default function Contato() {
    return (
        <section className="papel" style={{ padding: '60px 40px 40px', margin: '0 auto 50px', maxWidth: '650px' }}>
            <img src="/images/coruja.gif" alt="Coruja Voadora" className="coruja-gif" />

            <h2 className="contato-titulo">Correio Coruja</h2>
            <p className="contato-descricao">Deixe sua encomenda ou mensagem para o ferreiro.</p>
            
            <form action="#">
                <div>
                    <label style={{ fontWeight: 'bold', color: '#3e2723' }}>Seu Nome, Aventureiro:</label><br />
                    <input type="text" style={{ width: '100%', padding: '10px', marginTop: '6px', border: '1px solid #8b5a2b', backgroundColor: '#fffaf0', filter: 'url(#irregular)', boxSizing: 'border-box' }} placeholder="Ex: Gandalf, o Cinzento" />
                </div>
                
                <div>
                    <label style={{ fontWeight: 'bold', color: '#3e2723' }}>Sua Classe?</label><br />
                    <select style={{ width: '100%', padding: '10px', marginTop: '6px', border: '1px solid #8b5a2b', backgroundColor: '#fffaf0', filter: 'url(#irregular)', boxSizing: 'border-box' }}>
                        <option>Guerreiro</option>
                        <option>Mago</option>
                        <option>Ladino</option>
                        <option>Clérigo</option>
                    </select>
                </div>

                <div>
                    <label style={{ fontWeight: 'bold', color: '#3e2723' }}>Sua Mensagem ou Encomenda:</label><br />
                    <textarea rows="6" style={{ width: '100%', padding: '10px', marginTop: '6px', border: '1px solid #8b5a2b', backgroundColor: '#fffaf0', filter: 'url(#irregular)', boxSizing: 'border-box' }} placeholder="Escreva os detalhes da sua missão aqui..."></textarea>
                </div>
                
                <div className="container-botao">
                    <button type="submit" className="btn-comprar madeira" style={{ padding: '12px 25px', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', cursor: 'pointer' }}>Enviar Mensagem</button>
                </div>
            </form>
        </section>
    );
}