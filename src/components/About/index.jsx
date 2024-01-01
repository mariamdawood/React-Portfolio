// /src/components/About/index.jsx
import React from 'react';
import profileImage from '../../assets/images/IMG_9842.png';

const About = () => {
    return (
        <div className='about'>
            <img src={profileImage} alt="Profile" className="profile-img" />
            <div>
                <p>
                    Hello! I'm [Your Name], a passionate and creative web developer based in [Your Location].
                    I have a strong background in [mention relevant skills or technologies] and a love for building
                    responsive and user-friendly web applications.
                    My journey in web development started [mention how you got started] and since then, I've been
                    on a continuous learning path to stay updated with the latest technologies. I enjoy turning
                    ideas into reality and crafting meaningful digital experiences.
                    When I'm not coding, you can find me [mention hobbies or interests outside of coding].
                    Let's connect and create something amazing together!
                </p>
            </div>
        </div>
    );
};

export default About;