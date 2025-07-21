import React from 'react';

const ScheduleSection: React.FC = () => {
    return (
        <section id="schedule" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    OUR <span className="text-red-600">OPERATING HOURS</span>
                </h2>
                
                <div className="max-w-2xl mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden">
                    <div className="p-8">
                        <div className="flex justify-between py-4 border-b border-gray-200">
                            <span className="font-semibold">Monday - Friday</span>
                            <span className="text-gray-700">5:00 AM - 11:00 PM</span>
                        </div>
                        <div className="flex justify-between py-4 border-b border-gray-200">
                            <span className="font-semibold">Saturday</span>
                            <span className="text-gray-700">7:00 AM - 9:00 PM</span>
                        </div>
                        <div className="flex justify-between py-4">
                            <span className="font-semibold">Sunday</span>
                            <span className="text-gray-700">8:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-6">24/7 MEMBER ACCESS AVAILABLE</h3>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transform-hover">
                        BECOME A MEMBER TODAY
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;