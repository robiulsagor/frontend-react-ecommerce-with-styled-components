import { createContext, useState } from 'react';
import './App.css';
import Home from './pages/Home';

export const DiscountContext = createContext()

function App() {
  const [showDiscount, setShowDiscount] = useState(true)
  return (
    <DiscountContext.Provider value={[showDiscount, setShowDiscount]}>
      <Home />
    </DiscountContext.Provider>
  );
}

export default App;
