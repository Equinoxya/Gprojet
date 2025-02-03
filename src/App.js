import React, { useEffect } from 'react';
import Home from './Pages/Home';



function App() {
  useEffect(() => {
    const disableRightClick = (event) => {
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