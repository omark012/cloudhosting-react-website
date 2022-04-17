import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="footer bg-dark">
            <div className="container grid grid-3">
                <div>
                    <h3>Cloudways</h3>
                    <p>Cloudways Copyright &copy; - 2022</p>
                </div>

                <nav >
                    <ul >
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/docs">Docs</Link></li>
                    </ul>
                </nav>

                <div className="social-media">
                    <a href="https://www.facebook.com/"><i><FaFacebook size="1.5rem" /></i></a>
                    <a href="https://www.twitter.com"><i><FaTwitter size="1.5rem" /></i></a>
                    <a href="https://www.instagram.com"><i><FaInstagram size="1.5rem" /></i></a>
                    <a href="https://www.github.com"><i><FaGithub size="1.5rem" /></i></a>
                </div>
            </div>
        </footer>
    )
}
