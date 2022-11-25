import { createContext, useState } from 'react';
import './App.css';
import Signin from './pages/Signin';

export const DiscountContext = createContext()

function App() {
  const [showDiscount, setShowDiscount] = useState(true)
  return (
    <DiscountContext.Provider value={[showDiscount, setShowDiscount]}>
      <Signin />
    </DiscountContext.Provider>
  );
}

export default App;
