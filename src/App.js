import { createContext, useState } from 'react';
import './App.css';
import Product from './pages/Product';

export const DiscountContext = createContext()

function App() {
  const [showDiscount, setShowDiscount] = useState(true)
  return (
    <DiscountContext.Provider value={[showDiscount, setShowDiscount]}>
      <Product />
    </DiscountContext.Provider>
  );
}

export default App;
