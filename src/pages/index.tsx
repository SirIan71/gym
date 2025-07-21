import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ScheduleSection from '../components/ScheduleSection';
import ContactSection from '../components/ContactSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <StatsSection />
            <ServicesSection />
            <TestimonialsSection />
            <ScheduleSection />
            <ContactSection />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default HomePage;