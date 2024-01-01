// /src/components/Resume/index.jsx
import React from 'react';

const Resume = () => {
    return (
        <div>
            <h2>Resume</h2>
            {/* Link to a downloadable resume */}
            <p>
                Download my resume:{' '}
                <a href="/path/to/resume.pdf" download>
                    Resume
                </a>
            </p>
            {/* List of developer’s proficiencies */}
            <ul>
                <li>Proficiency 1</li>
                <li>Proficiency 2</li>
                {/* Add more proficiencies */}
            </ul>
        </div>
    );
};

export default Resume;