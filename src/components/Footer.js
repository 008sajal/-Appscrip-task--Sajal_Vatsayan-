import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section>
                <footer className="text-center text-white" style={{ backgroundColor: 'black' }}>
                    <div>
                        <h3>BE THE FIRST TO KNOW</h3>
                        <h5>Sign UP for Updates</h5>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <p>Phone: 123-456-7890</p>
                        <p>Email: info@example.com</p>
                    </div>
                    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        Made By Sajal vatsayan&nbsp;
                        <NavLink  to="/">
                            (E-COMMERCE)
                        </NavLink>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer;
