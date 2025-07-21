import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">GET IN <span className="text-red-600">TOUCH</span></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">CONTACT INFORMATION</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <i className="fas fa-map-marker-alt text-red-600 mt-1 mr-4"></i>
                                <p>123 Fitness Avenue, Muscle City, FC 12345</p>
                            </div>
                            <div className="flex items-start">
                                <i className="fas fa-phone-alt text-red-600 mt-1 mr-4"></i>
                                <p>(123) 456-7890</p>
                            </div>
                            <div className="flex items-start">
                                <i className="fas fa-envelope text-red-600 mt-1 mr-4"></i>
                                <p>info@ironforgefitness.com</p>
                            </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold mt-12 mb-6">FOLLOW US</h3>
                        <div className="flex space-x-6">
                            <a href="#" className="text-white hover:text-red-600 text-2xl"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-white hover:text-red-600 text-2xl"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white hover:text-red-600 text-2xl"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white hover:text-red-600 text-2xl"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-bold mb-6">SEND US A MESSAGE</h3>
                        <form>
                            <div className="mb-6">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                            </div>
                            <div className="mb-6">
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                            </div>
                            <div className="mb-6">
                                <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transform-hover">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;