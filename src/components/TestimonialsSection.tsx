import React from 'react';

const testimonials = [
    {
        name: "Sarah J.",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 5,
        message: "I lost 35 pounds in 4 months with the help of Iron Forge's personal training and nutrition program. Life-changing experience!"
    },
    {
        name: "Mike T.",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        message: "The group classes are amazing! The energy is electric, and I've never been in better shape. 10/10 would recommend."
    },
    {
        name: "Jessica L.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        message: "From beginner to fitness enthusiast! The trainers are incredibly knowledgeable and supportive. Best gym in town!"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    SUCCESS <span className="text-red-600">STORIES</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-800 p-8 rounded-lg transform-hover">
                            <div className="flex items-center mb-6">
                                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <div className="flex text-yellow-400">
                                        {Array.from({ length: testimonial.rating }, (_, i) => (
                                            <i key={i} className="fas fa-star"></i>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="italic">"{testimonial.message}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;