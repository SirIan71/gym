import React from 'react';

const CallToAction: React.FC = () => {
    return (
        <section className="py-16 bg-black text-white text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">READY TO TRANSFORM <span className="text-red-600">YOUR LIFE?</span></h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">Sign up today and get 7 days FREE. No obligation, no commitment. Just results.</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg transform-hover pulse-animation">CLAIM YOUR FREE TRIAL</button>
            </div>
        </section>
    );
};

export default CallToAction;