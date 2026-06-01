import { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export default function AdminProdutos() {
    const { produtos, adicionarProduto, atualizarProduto, excluirProduto } = useContext(ProductContext);
    
    // Estado do formulário
    const [formData, setFormData] = useState({ nome: '', desc: '', preco: '', img: 'adaga_dourada.svg' });
    const [idEmEdicao, setIdEmEdicao] = useState(null);
    
    // Novo estado para controlar a janela (barra) de ícones
    const [mostrarIcones, setMostrarIcones] = useState(false);

    // Todos os ícones disponíveis atualizados com base na sua pasta
    const iconesDisponiveis = [
        'adaga_dourada.svg', 'adaga_ossos.svg', 'adaga_prata.svg',
        'arco_flecha.svg', 'bau.svg', 'berrante.svg', 'bomba.svg',
        'carta.svg', 'chave_dourada.svg', 'chave_prata.svg', 'coroa.svg',
        'cristal_azul.svg', 'cristal_vermelho.svg', 'elmo_1.svg', 'elmo_2.svg',
        'elmo_3.svg', 'escudo_amarelo.svg', 'escudo_azul.svg', 'escudo_basico.svg',
        'escudo_retangular.svg', 'escudo_x.svg', 'machado_duplo.svg',
        'machado_medio.svg', 'machado_pontudo.svg', 'machado_simples.svg',
        'mangual.svg', 'martelo.svg', 'moeda.svg', 'pocao_azul.svg',
        'pocao_verde.svg', 'pocao_vermelha.svg', 'raio_dourado.svg',
        'raio_prata.svg', 'tnt.svg'
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const selecionarIcone = (nomeIcone) => {
        setFormData({ ...formData, img: nomeIcone });
        setMostrarIcones(false); // Recolhe a janela após selecionar
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idEmEdicao) {
            atualizarProduto(idEmEdicao, formData);
            setIdEmEdicao(null);
        } else {
            adicionarProduto({ ...formData, preco: Number(formData.preco) });
        }
        // Limpar form após forjar
        setFormData({ nome: '', desc: '', preco: '', img: 'pocao_vermelha.svg' });
        setMostrarIcones(false);
    };

    const prepararEdicao = (produto) => {
        setFormData({ nome: produto.nome, desc: produto.desc, preco: produto.preco, img: produto.img });
        setIdEmEdicao(produto.id);
        setMostrarIcones(false);
        window.scrollTo(0, 0); // Sobe a página para o formulário
    };

    const inputStyle = { width: '100%', padding: '10px', marginTop: '6px', border: '1px solid #8b5a2b', backgroundColor: '#fffaf0', boxSizing: 'border-box' };

    return (
        <section className="papel" style={{ padding: '40px', margin: '0 auto 50px', maxWidth: '850px' }}>
            <h2 className="contato-titulo">Forja do Ferreiro</h2>
            <p className="contato-descricao">Gerencie os artefatos disponíveis no Armazém.</p>

            {/* FORMULÁRIO CREATE/UPDATE */}
            <form onSubmit={handleSubmit} style={{ marginBottom: '40px', padding: '20px', border: '2px dashed #8b5a2b', position: 'relative' }}>
                <h3 style={{ fontFamily: "'MedievalSharp', cursive", marginTop: 0, color: '#5c1606' }}>
                    {idEmEdicao ? 'Forjar Alterações (Editar)' : 'Forjar Novo Artefato (Cadastrar)'}
                </h3>
                
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 200px', marginBottom: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#3e2723' }}>Nome do Item:</label>
                        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required style={inputStyle} />
                    </div>
                    
                    <div style={{ flex: '1 1 100px', marginBottom: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#3e2723' }}>Preço (Ouro):</label>
                        <input type="number" name="preco" value={formData.preco} onChange={handleChange} required style={inputStyle} />
                    </div>

                    {/* SECÇÃO VISUAL DE SELEÇÃO DE ÍCONE */}
                    <div style={{ flex: '1 1 200px', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: 'bold', color: '#3e2723' }}>Ícone do Artefato:</label>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '6px' }}>
                            <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(0,0,0,0.1)', border: '2px solid #8b5a2b', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={`/images/icons/${formData.img}`} alt="Ícone Selecionado" style={{ width: '35px', height: '35px', objectFit: 'contain' }} />
                            </div>
                            <button 
                                type="button" 
                                onClick={() => setMostrarIcones(!mostrarIcones)} 
                                className="btn-comprar madeira" 
                                style={{ padding: '8px 15px', border: 'none', fontSize: '0.9rem' }}
                            >
                                {mostrarIcones ? 'Recolher Baú' : 'Abrir Baú de Ícones'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* CAIXA RETRÁTIL COM OS ÍCONES */}
                {mostrarIcones && (
                    <div style={{ backgroundColor: '#fffaf0', border: '2px solid #8b5a2b', padding: '15px', marginBottom: '15px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))', gap: '10px', maxHeight: '200px', overflowY: 'auto', borderRadius: '5px', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)' }}>
                        {iconesDisponiveis.map((icone) => (
                            <div 
                                key={icone} 
                                onClick={() => selecionarIcone(icone)}
                                style={{ border: formData.img === icone ? '2px solid #d32f2f' : '1px solid #ccc', padding: '5px', cursor: 'pointer', textAlign: 'center', backgroundColor: formData.img === icone ? '#fbe9e7' : 'transparent', borderRadius: '5px', transition: 'all 0.2s' }}
                                title={icone}
                            >
                                <img src={`/images/icons/${icone}`} alt={icone} style={{ width: '40px', height: '40px', objectFit: 'contain', filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))' }} />
                            </div>
                        ))}
                    </div>
                )}

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ fontWeight: 'bold', color: '#3e2723' }}>Descrição:</label>
                    <textarea name="desc" rows="2" value={formData.desc} onChange={handleChange} required style={inputStyle}></textarea>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="submit" className="btn-comprar madeira" style={{ padding: '10px 20px', border: 'none' }}>
                        {idEmEdicao ? 'Salvar Artefato' : 'Adicionar ao Estoque'}
                    </button>
                    {idEmEdicao && (
                        <button type="button" onClick={() => { setIdEmEdicao(null); setFormData({ nome: '', desc: '', preco: '', img: 'pocao_vermelha.svg' }); setMostrarIcones(false); }} className="btn-comprar madeira" style={{ padding: '10px 20px', backgroundColor: '#5c1606', border: 'none' }}>
                            Cancelar
                        </button>
                    )}
                </div>
            </form>

            {/* TABELA READ/DELETE */}
            <h3 style={{ fontFamily: "'MedievalSharp', cursive", color: '#5c1606' }}>Estoque Atual</h3>
            <div style={{ overflowX: 'auto' }}>
                <table className="tabela-bau">
                    <thead>
                        <tr>
                            <th>Ícone</th>
                            <th>Item</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(produto => (
                            <tr key={produto.id}>
                                <td><img src={`/images/icons/${produto.img}`} alt={produto.nome} style={{ height: '30px' }} /></td>
                                <td>{produto.nome}</td>
                                <td>{produto.preco} <img src="/images/icons/moeda.svg" className="moeda-icone-p" alt="Ouro" /></td>
                                <td>
                                    <button onClick={() => prepararEdicao(produto)} style={{ margin: '0 5px', padding: '5px 10px', backgroundColor: '#f1c40f', border: '1px solid #8b5a2b', cursor: 'pointer', fontWeight: 'bold' }}>Editar</button>
                                    <button onClick={() => excluirProduto(produto.id)} style={{ margin: '0 5px', padding: '5px 10px', backgroundColor: '#d32f2f', color: '#fff', border: '1px solid #8b5a2b', cursor: 'pointer', fontWeight: 'bold' }}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}