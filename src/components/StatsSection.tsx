import React from 'react';

const StatsSection: React.FC = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 transform-hover">
                        <div className="text-5xl font-bold text-red-600 mb-3">500+</div>
                        <div className="text-xl">SATISFIED MEMBERS</div>
                    </div>
                    <div className="p-6 transform-hover">
                        <div className="text-5xl font-bold text-red-600 mb-3">24/7</div>
                        <div className="text-xl">ACCESS & SUPPORT</div>
                    </div>
                    <div className="p-6 transform-hover">
                        <div className="text-5xl font-bold text-red-600 mb-3">10</div>
                        <div className="text-xl">CERTIFIED TRAINERS</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;