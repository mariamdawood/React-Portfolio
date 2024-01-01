// /src/components/Portfolio/index.jsx
import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h2>Portfolio</h2>
            {/* Titled images of six applications with links */}
            <div>
                <img src="/path/to/app1.jpg" alt="App 1" />
                <h3>App 1</h3>
                <p>
                    Links:
                    <a href="https://deployed-app-1.com">Deployed App</a> |{' '}
                    <a href="https://github.com/username/app-1">GitHub Repository</a>
                </p>
            </div>
            {/* Repeat similar structure for other applications */}
        </div>
    );
};

export default Portfolio;