import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <i className="fas fa-dumbbell text-red-600 text-3xl mr-3"></i>
                        <h1 className="text-2xl font-bold">BODY<span className="text-red-600">FIT</span> GYM</h1>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="hover:text-red-600 font-semibold">HOME</a>
                        <a href="#services" className="hover:text-red-600 font-semibold">SERVICES</a>
                        <a href="#schedule" className="hover:text-red-600 font-semibold">HOURS</a>
                        <a href="#contact" className="hover:text-red-600 font-semibold">CONTACT</a>
                    </nav>
                    <button className="md:hidden text-white">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;