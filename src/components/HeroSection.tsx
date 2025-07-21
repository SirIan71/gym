import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="hero min-h-screen flex items-center text-white py-20" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">UNLEASH <span className="text-red-600">YOUR POTENTIAL</span></h1>
                <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">Join our community of fitness warriors and start your transformative journey today. Achieve the sculpted physique you've always dreamed of!</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg transform-hover pulse-animation">START YOUR FREE TRIAL</button>
            </div>
        </section>
    );
};

export default HeroSection;