import Starfield from './components/Starfield';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import Proof from './components/Proof';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-[#f5f5f5] overflow-x-hidden">
      <Starfield />

      <div className="relative z-10">
        <Hero />
        <Mission />
        <Services />
        <Proof />
        <Booking />
        <Footer />
      </div>
    </div>
  );
}

export default App;
