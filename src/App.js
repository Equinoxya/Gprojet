import React, { useEffectEvent } from 'react';
import Home from './Pages/Home'; // Ensure this path is correct



function App() {
  useEffectEvent(() => {
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