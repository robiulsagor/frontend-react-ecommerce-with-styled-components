import { createContext, useState } from 'react';
import './App.css';
import { NavigationContext } from './contextAPI/NavContext';
import Signin from './pages/Signin';


export const DiscountContext = createContext()

function App() {
  const [showDiscount, setShowDiscount] = useState(true)
  const [showNav, setShowNav] = useState(false)
  return (
    <NavigationContext.Provider value={{ showNav, setShowNav }}>
      <DiscountContext.Provider value={[showDiscount, setShowDiscount]}>
        <Signin />
      </DiscountContext.Provider>
    </NavigationContext.Provider>
  );
}

export default App;
