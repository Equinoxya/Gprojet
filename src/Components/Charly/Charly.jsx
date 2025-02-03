import React from 'react';
import './Charly.css';

const Charly = () => {
    return (
        <div>
            <img 
            className='Charly' 
            src="/images/Charly.png" 
            alt="Charly"
            style={{ pointerEvents: "none", userSelect: "none" }} />
        </div>
    );
};

export default Charly;