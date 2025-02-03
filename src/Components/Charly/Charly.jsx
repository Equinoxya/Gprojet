import React from 'react';
import './Charly.css';

const Charly = () => {
    return (
        <div>
            <img 
            className='Charly' 
            src="/images/Charly.png" 
            alt="Charly"
            onContextMenu={(e) => e.preventDefault()} />
        </div>
    );
};

export default Charly;