import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Carrinho from './pages/Carrinho';
import Contato from './pages/Contato';
import AdminProdutos from './pages/AdminProdutos'; // Importando a nova página
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext'; // Importando o provedor de produtos

function App() {
  return (
    <ProductProvider> {/* Provedor de Produtos por fora */}
      <CartProvider>  {/* Provedor do Carrinho por dentro */}
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/admin" element={<AdminProdutos />} /> {/* Nova Rota do CRUD */}
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;