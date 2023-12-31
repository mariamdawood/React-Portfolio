// /src/components/Footer/index.jsx
import React from 'react';

function Footer() {
    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/mariamdawood"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/mariamdawood926"
        },
        {
            name: "fab fa-stack-overflow",
            link: "https://meta.stackexchange.com/users/1452264/mariam-dawood"
        }
    ]

    return (
        <footer className="contact-icons">
            {icons.map(icon =>
            (
                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
            )
            )}
        </footer>
    );
}

export default Footer;