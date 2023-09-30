import React, { useEffect, useRef} from 'react';
import './../Home.css'

function Home() {
    const backgroundRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const blogsRef = useRef(null);

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

    const handleOrbitEnd = (e, ref) => {
        if (!ref.current) {
            return;
        }
        if (e.animationName === 'orbitIn') {
            console.log('Removing orbit-in-animation class')
            ref.current.classList.remove('orbit-in-animation');
            ref.current.classList.add('orbit-out-animation');
        } else if (e.animationName === 'orbitOut') {
            ref.current.classList.remove('orbit-out-animation');
        }

        if (ref.current.boundHandleOrbitEnd) {
            ref.current.removeEventListener('animationend', ref.current.boundHandleOrbitEnd);
        }
    };

    const handleMouseEnter = (ref) => {
        //Check not null
        if (!ref.current) return;
        if (!ref.current.classList.contains('orbit-in-animation') && !ref.current.classList.contains('orbit-out-animation')) {
            ref.current.classList.add('orbit-in-animation');
            const boundHandleOrbitEnd = (e) => handleOrbitEnd(e, ref);
            ref.current.handleOrbitEnd = boundHandleOrbitEnd;
            ref.current.addEventListener('animationend', boundHandleOrbitEnd);
        }
    };

    const handleMouseLeave = (ref) => {
        if(!ref.current) return;
        if (ref.current.classList.contains('orbit-in-animation')) {
            return;
        } else {
            ref.current.classList.add('orbit-out-animation');
        }
    };

    return (
        <div className="home-container">
            <div className="stars"></div>
            <h1>Liam Craven</h1>
            <p>Add my tagline here!</p>
            <div className="planets">
                <div className='planet-container' 
                    onMouseOver={() => handleMouseEnter(backgroundRef)} 
                    onMouseOut={() => handleMouseLeave(backgroundRef)}>
                    <div className='planet' id='background-planet'></div>
                    <div className='planet-label' ref={backgroundRef}>Background</div>
                </div>
                    <div className='planet-container' 
                        onMouseOver={() => handleMouseEnter(educationRef)} 
                        onMouseOut={() => handleMouseLeave(educationRef)}>
                        <div className='planet' id='education-planet'></div>
                        <div className='planet-label' ref={educationRef}>Education</div>
                    </div>
                    <div className='planet-container' 
                        onMouseEnter={() => handleMouseEnter(skillsRef)} 
                        onMouseLeave={() => handleMouseLeave(skillsRef)}>
                        <div className='planet' id='skills-planet'></div>
                        <div className='planet-label' ref={skillsRef}>Skills</div>
                    </div>
                    <div className='planet-container' 
                        onMouseEnter={() => handleMouseEnter(projectsRef)} 
                        onMouseLeave={() => handleMouseLeave(projectsRef)}>
                        <div className='planet' id='projects-planet'></div>
                        <div className='planet-label' ref={projectsRef}>Projects</div>
                    </div>
                    <div className='planet-container'
                        onMouseEnter={() => handleMouseEnter(experienceRef)} 
                        onMouseLeave={() => handleMouseLeave(experienceRef)}>
                        <div className='planet' id='experience-planet'></div>
                        <div className='planet-label' ref={experienceRef}>Experience</div>
                    </div>
                    <div className='planet-container'
                        onMouseEnter={() => handleMouseEnter(blogsRef)} 
                        onMouseLeave={() => handleMouseLeave(blogsRef)}>
                        <div className='planet' id='blogs-planet'></div>
                        <div className='planet-label' ref={blogsRef}>Blogs</div>
                    </div>
            </div>
        </div>
    );
}

export default Home;