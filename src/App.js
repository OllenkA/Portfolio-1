import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import MyWorks from './components/MyWorks/MyWorks';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Particles from 'react-particles-js';

const particlesOpt = {
    particles: {
        number: {
            value: 150,
            denisty: {
                enable: true,
                value_area: 1000
            }
        }
    }
};

function App() {
    return <main className='portfolio'>
        <Particles className='particles'
                   params={particlesOpt}/>
        <Header/>
        <section className='scroll'>
            <AboutMe/>
            <Skills/>
            <MyWorks/>
            <Contacts/>
            <Footer/>
        </section>
    </main>
}

export default App;
