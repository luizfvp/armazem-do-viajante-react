# 🛡️ Armazém do Viajante

> Um sistema de e-commerce conceitual com temática medieval e de RPG, apresentando design imersivo, gestão de inventário e sistema de administração de produtos.

## 📜 Sobre o Projeto

O **Armazém do Viajante** é uma aplicação web Single Page Application (SPA) que simula uma loja de suprimentos para aventureiros de RPG. Desenvolvido como projeto prático para o 4º semestre de Análise e Desenvolvimento de Sistemas da Newton Paiva Wyden, o sistema combina uma interface altamente temática (com texturas de madeira, pedra, pergaminho e filtros SVG) com as melhores práticas de desenvolvimento front-end moderno.

O objetivo do sistema é fornecer uma experiência de compra imersiva para o usuário final, permitindo a adição de itens mágicos e armamentos a um "Baú" (carrinho), além de contar com um painel administrativo (A Forja do Ferreiro) completo para gerenciar o estoque em tempo real.

## ✨ Funcionalidades Principais

- **Vitrine Dinâmica:** Exibição responsiva de artefatos mágicos e equipamentos, consumindo dados de um estado global.
- **Sistema de Inventário (Carrinho/Baú):** Um baú flutuante que contabiliza os itens selecionados de forma global por toda a aplicação. Resumo de compras com cálculo de custo total em peças de ouro.
- **Painel Administrativo (CRUD):** - **Create:** Interface visual para forjar (cadastrar) novos artefatos, com direito a um "Baú de Ícones" retrátil para seleção visual das imagens.
  - **Read:** Tabela de listagem dinâmica do estoque atual.
  - **Update:** Edição de artefatos já cadastrados no sistema.
  - **Delete:** Exclusão rápida de itens do estoque.
- **Correio Coruja (Contato):** Formulário de contato estilizado e imersivo.
- **Navegação SPA:** Transições instantâneas entre as páginas sem recarregamento (via React Router).

## 🛠️ Tecnologias e Ferramentas Utilizadas

O projeto foi refatorado de HTML/CSS puro para o ecossistema React, garantindo componentização e escalabilidade:

- **[React.js](https://react.dev/):** Biblioteca principal para construção das interfaces de usuário.
- **[Vite](https://vitejs.dev/):** Ferramenta de build super rápida e ambiente de desenvolvimento.
- **[React Router DOM](https://reactrouter.com/):** Gerenciamento de rotas para navegação Single Page.
- **Context API:** Gerenciamento de estados globais tanto para o carrinho de compras (`CartContext`) quanto para a listagem e administração de produtos (`ProductContext`).
- **CSS3 Avançado:** Utilização de Flexbox, Grid, e manipulação de SVG Filters (`feTurbulence`) para criação de texturas e bordas irregulares temáticas.

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o **[Node.js](https://nodejs.org/)** instalado em sua máquina (versão 16 ou superior).

### Passo a Passo

1. **Clone ou faça o download** deste repositório para a sua máquina local.

2. Abra o terminal e navegue até a pasta raiz do projeto:
```bash
   cd armazem-do-viajante

```

3. Instale todas as dependências do projeto:
```bash
npm install

```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev

```

5. O terminal exibirá um link local (geralmente `http://localhost:5173`). Clique ou copie e cole no seu navegador para acessar a aplicação.

## 📂 Estrutura de Diretórios

A arquitetura do projeto segue o padrão de separação de responsabilidades do React:

```text
armazem-do-viajante/
├── public/
│   └── images/              # Arquivos estáticos (GIFs de background e ícones SVG)
├── src/
│   ├── components/          # Componentes reaproveitáveis (Header, Footer, Layout)
│   ├── context/             # Provedores de estado global (CartContext, ProductContext)
│   ├── pages/               # Páginas da aplicação (Home, Produtos, Carrinho, Admin, etc.)
│   ├── App.jsx              # Configuração central das rotas e injeção de Contextos
│   ├── main.jsx             # Ponto de entrada da aplicação React
│   └── index.css            # Estilos globais e texturas temáticas
├── index.html               # Template HTML base (onde o favicon e o React são injetados)
├── package.json             # Configurações do projeto e dependências
└── vite.config.js           # Configurações de build do Vite

```

## 👥 Autores

Este projeto foi forjado pelos mestres artesãos:

* **Luiz Felipe Vieira de Paula**
* **Patrick Moreira Motta**

---

*Nenhum dragão foi ferido durante o desenvolvimento deste sistema.* 🐉