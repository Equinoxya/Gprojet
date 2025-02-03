import React, { useEffect } from 'react';
import Home from './Pages/Home';



function App() {
  useEffect(() => {
    console.log('useEffect appelé'); // Vérifie si ce message apparaît

    const disableRightClick = (event) => {
      console.log('Clic droit désactivé'); // Vérifie si cet événement se déclenche
      event.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);
  return (
          <div>
            <Home />
          </div>
  );
}

export default App;