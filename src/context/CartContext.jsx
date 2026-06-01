import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [quantidadeNoBau, setQuantidadeNoBau] = useState(0);

    const adicionarAoBau = (event) => {
        event.preventDefault();
        setQuantidadeNoBau((prev) => prev + 1);
    };

    return (
        <CartContext.Provider value={{ quantidadeNoBau, adicionarAoBau }}>
            {children}
        </CartContext.Provider>
    );
}