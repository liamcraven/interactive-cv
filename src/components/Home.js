import React, { useEffect } from 'react';
import './../Home.css'

function Home() {

    useEffect(() => {
        const starContainer = document.querySelector('.stars');

        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            const opacity = 0.5 + Math.random() * 0.5;
            star.className = 'star';
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.width = `${2 + Math.random() * 3}px`;
            star.style.height = star.style.width;
            star.style.animationDelay = `${Math.random() * 1.5}s`;
            star.style.opacity = opacity;
            starContainer.appendChild(star);
        }
    }, []);


    const handleMouseEnter = (e) => {
        const label = e.target.querySelector('.planet-label');
        label.style.animation = 'orbitIn 5s forwards'
    };

    const handleMouseLeave = (e) => {
        const label = e.target.querySelector('.planet-label');
        label.style.animation = 'orbitOut 5s forwards'
    };

    return (
        <div className="home-container">
            <div className="stars"></div>
            <h1>Liam Craven</h1>
            <p>Add my tagline here!</p>
            <div className="planets">
                    <div className='planet-container'>
                        <div className='planet' id='background-planet'></div>
                        <div className='planet-label'>Background</div>

                    </div>
                    <div className='planet-container'>
                        <div className='planet' id='education-planet'></div>
                        <div className='planet-label'>Education</div>
                    </div>
                    <div className='planet-container'>
                        <div className='planet' id='skills-planet'></div>
                        <div className='planet-label'>Skills</div>
                    </div>
                    <div className='planet-container'>
                        <div className='planet' id='projects-planet'></div>
                        <div className='planet-label'>Projects</div>
                    </div>
                    <div className='planet-container'>
                        <div className='planet' id='experience-planet'></div>
                        <div className='planet-label'>Experience</div>
                    </div>
                    <div className='planet-container'>
                        <div className='planet' id='blogs-planet'></div>
                        <div className='planet-label'>Blogs</div>
                    </div>
            </div>
        </div>
    );
}

export default Home;