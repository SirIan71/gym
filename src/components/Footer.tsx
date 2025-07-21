import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <div className="flex items-center mb-6">
                            <i className="fas fa-dumbbell text-red-600 text-3xl mr-3"></i>
                            <h3 className="text-2xl font-bold text-white">BODY<span className="text-red-600">FIT</span> GYM</h3>
                        </div>
                        <p>Your premier destination for fitness transformation and lifestyle elevation.</p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">QUICK LINKS</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-red-600">Home</a></li>
                            <li><a href="#services" className="hover:text-red-600">Services</a></li>
                            <li><a href="#schedule" className="hover:text-red-600">Hours</a></li>
                            <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">SERVICES</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-red-600">Personal Training</a></li>
                            <li><a href="#" className="hover:text-red-600">Group Classes</a></li>
                            <li><a href="#" className="hover:text-red-600">Nutrition Planning</a></li>
                            <li><a href="#" className="hover:text-red-600">Corporate Wellness</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">NEWSLETTER</h4>
                        <p className="mb-4">Subscribe to get fitness tips and exclusive offers.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your Email" className="px-4 py-2 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-red-600 w-full" />
                            <button className="bg-red-600 hover:bg-red-700 px-4 rounded-r-lg"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p>&copy; 2023 BodyFit Gym. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;