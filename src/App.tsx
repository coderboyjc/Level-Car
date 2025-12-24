import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import ServiceZones from './components/ServiceZones';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <ContactForm />
        <ServiceZones />
        <Steps />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
