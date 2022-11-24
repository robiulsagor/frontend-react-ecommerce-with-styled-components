import { createContext, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';

export const DiscountContext = createContext()

function App() {
  const [showDiscount, setShowDiscount] = useState(true)
  return (
    <DiscountContext.Provider value={[showDiscount, setShowDiscount]}>
      <ProductList />
    </DiscountContext.Provider>
  );
}

export default App;
