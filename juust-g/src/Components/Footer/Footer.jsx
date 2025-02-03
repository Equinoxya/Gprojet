import React, { useState } from 'react';
import './Footer.css';
const Footer = () => {
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <footer>
            <div className='footer-div'>
                <p className='name-newsletter'>Newsletter</p>
                <input 
                    type="email" 
                    placeholder="Entre ton email" 
                    value={email} 
                    onChange={handleEmailChange} 
                />
                <label>
                    <input 
                        className='checkbox'
                        type="checkbox" 
                        checked={isChecked} 
                        onChange={handleCheckboxChange} 
                    />
                    <p className='avertissement-newsletter'>En cochant cette case, vous acceptez de recevoir nos newsletters par e-mail.<br/>
                        Vous pouvez vous désinscrire à tout moment.
                    </p>
                </label>
            </div>
        </footer>
    );
};

export default Footer;