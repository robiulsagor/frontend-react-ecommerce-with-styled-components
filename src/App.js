import { createContext, useState } from 'react';
import './App.css';
import Register from './pages/Register';

export const DiscountContext = createContext()

function App() {
  const [showDiscount, setShowDiscount] = useState(true)
  return (
    <DiscountContext.Provider value={[showDiscount, setShowDiscount]}>
      <Register />
    </DiscountContext.Provider>
  );
}

export default App;
