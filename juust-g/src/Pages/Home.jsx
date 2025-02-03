import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Background from '../Components/Background/Background';
import Charly from '../Components/Charly/Charly';
import Footer from '../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Charly />
            <Navbar />
            <Background/>
            <Footer />
            
        </div> 
    );
};

export default Home;