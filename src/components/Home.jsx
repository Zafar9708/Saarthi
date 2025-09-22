import Footer from "./Footer"
import HealthcareServices from "./HealthcareServices"
import HealthCommunity from "./HealthCommunity"
import HeroSection from "./HeroSection"
import InnovationSpotlight from "./InnovationSpotlight"
import InteractiveFeatures from "./InteractiveFeatures"
import MobileApp from "./MobileApp"
import Navbar from "./Navbar"
import PatientTestimonials from "./PatientTestimonials"
import ValueProposition from "./ValueProposition"

const Home=()=>{
    return (
    <>

    <Navbar />
    <HeroSection />
    <ValueProposition />
    <InteractiveFeatures />
    <HealthcareServices />
    <PatientTestimonials />
    <MobileApp />
    <HealthCommunity />
    <InnovationSpotlight />
    <Footer />

    </>
    )
}
export default Home