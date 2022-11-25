import { createContext, useState } from 'react';
import './App.css';
import Cart from './pages/Cart';

export const DiscountContext = createContext()

function App() {
  const [showDiscount, setShowDiscount] = useState(true)
  return (
    <DiscountContext.Provider value={[showDiscount, setShowDiscount]}>
      <Cart />
    </DiscountContext.Provider>
  );
}

export default App;
