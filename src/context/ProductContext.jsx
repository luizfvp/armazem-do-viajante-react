import { createContext, useState } from 'react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    // Adicionamos um 'id' único para cada produto para facilitar a edição e exclusão
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Poção de Cura", desc: "Restaura 30 HP instantaneamente.", preco: 25, img: "pocao_vermelha.svg" },
        { id: 2, nome: "Poção de Mana", desc: "Recupera 20 pontos de magia (MP).", preco: 25, img: "pocao_azul.svg" },
        { id: 3, nome: "Frasco de Veneno", desc: "Aplica dano contínuo à arma.", preco: 40, img: "pocao_verde.svg" },
        { id: 4, nome: "Chave de Ouro", desc: "Abre fechaduras de raridade alta.", preco: 150, img: "chave_dourada.svg" },
        { id: 5, nome: "Adaga Furtiva", desc: "+5 Dano. Ideal para ataques furtivos.", preco: 100, img: "adaga_ossos.svg" },
        { id: 6, nome: "Espada Larga", desc: "+15 Dano. Arma confiável de guerreiro.", preco: 250, img: "adaga_prata.svg" },
        { id: 7, nome: "Arco de Caça", desc: "+12 Dano à distância. Requer flechas.", preco: 180, img: "arco_flecha.svg" },
        { id: 8, nome: "Machado Rústico", desc: "+10 Dano. Útil também como ferramenta.", preco: 120, img: "machado_medio.svg" },
        { id: 9, nome: "Targe de Madeira", desc: "+8 Defesa. Leve e fácil de manusear.", preco: 75, img: "escudo_basico.svg" },
        { id: 10, nome: "Escudo de Ferro Negromante", desc: "+25 Defesa. Resiste a fogo e cortes pesados.", preco: 400, img: "escudo_azul.svg" },
        { id: 11, nome: "Elmo do Bárbaro", desc: "+15 Defesa. Fornece bônus de intimidação.", preco: 300, img: "elmo_1.svg" },
        { id: 12, nome: "Machado de Batalha", desc: "+22 Dano. Arma pesada de duas mãos.", preco: 350, img: "machado_duplo.svg" },
        { id: 13, nome: "Carga Explosiva", desc: "Alto dano em área. Mantenha distância!", preco: 200, img: "tnt.svg" },
        { id: 14, nome: "Safira Mística", desc: "Material usado para encantar armaduras.", preco: 600, img: "cristal_azul.svg" },
        { id: 15, nome: "Gema do Coração do Vulcão", desc: "Concede imunidade permanente a queimação.", preco: 1800, img: "cristal_vermelho.svg" }
    ]);

    // CREATE
    const adicionarProduto = (novoProduto) => {
        setProdutos([...produtos, { ...novoProduto, id: Date.now() }]);
    };

    // UPDATE
    const atualizarProduto = (id, produtoAtualizado) => {
        setProdutos(produtos.map(p => p.id === id ? { ...produtoAtualizado, id } : p));
    };

    // DELETE
    const excluirProduto = (id) => {
        setProdutos(produtos.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{ produtos, adicionarProduto, atualizarProduto, excluirProduto }}>
            {children}
        </ProductContext.Provider>
    );
}