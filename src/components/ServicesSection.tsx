import React from 'react';

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    OUR <span className="text-red-600">PREMIUM SERVICES</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Service 1 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform-hover">
                        <div className="h-48 bg-gray-800 flex items-center justify-center">
                            <i className="fas fa-dumbbell text-red-600 text-6xl"></i>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4">PERSONAL TRAINING</h3>
                            <p className="text-gray-700 mb-6">
                                Customized workout plans tailored to your specific goals by our elite trainers. Maximize results with 1-on-1 attention.
                            </p>
                            <button className="text-red-600 font-semibold hover:underline">Learn More →</button>
                        </div>
                    </div>
                    
                    {/* Service 2 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform-hover">
                        <div className="h-48 bg-gray-800 flex items-center justify-center">
                            <i className="fas fa-users text-red-600 text-6xl"></i>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4">GROUP CLASSES</h3>
                            <p className="text-gray-700 mb-6">
                                High-energy classes including HIIT, CrossFit, Yoga, and more. Experience the power of community workouts.
                            </p>
                            <button className="text-red-600 font-semibold hover:underline">Learn More →</button>
                        </div>
                    </div>
                    
                    {/* Service 3 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform-hover">
                        <div className="h-48 bg-gray-800 flex items-center justify-center">
                            <i className="fas fa-heartbeat text-red-600 text-6xl"></i>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4">NUTRITION PLANNING</h3>
                            <p className="text-gray-700 mb-6">
                                Science-backed meal plans to complement your training regimen and accelerate your progress.
                            </p>
                            <button className="text-red-600 font-semibold hover:underline">Learn More →</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;