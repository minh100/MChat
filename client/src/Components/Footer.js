import React from 'react';
import '../Css/Footer.css';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="name-section">
                <h3>Created By: Minh Truong</h3>
                <div className="footer-container">
                    <a className="footer-link" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/minh100/">Linkedin</a>
                    <a className="footer-link" rel="noopener noreferrer" target="_blank" href="https://github.com/minh100/MChat">Github</a>
                </div>
            </div>
        </div>
    )
}