// /src/components/About/index.jsx
import React from 'react';
import profileImage from '../../assets/images/IMG_9842.png';

const About = () => {
    return (
        <div className='about'>
            <img src={profileImage} alt="Profile" className="profile-img" />
            <div>
                <p>
                    Hello! I'm Mariam Dawood full-stack web developer situated in Nashville, TN.
                    My passion lies in crafting responsive and user-friendly web applications.
                    Having successfully completed a Full Stack Web Development Bootcamp at Vanderbilt University,
                    As I look forward to commencing my university studies in 2024, my commitment to continuous learning remains unwavering.
                </p>
            </div>
        </div>
    );
};

export default About;