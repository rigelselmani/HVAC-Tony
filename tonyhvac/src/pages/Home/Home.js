import Contact from "./Contact";
import "./Home.css"
import Slider from "./Slider";

export default function Home(){
    return(
        <div className="contain">
            <div className="content">
                <div className="main">
                    <h1 className="main-h1">HEATING COMPANY IN Masachusets</h1>
                    <p style={{fontSize:"27px"}}>FULL HVAC SYSTEM INSPECTION AND TUNE-UP</p>
                    <p style={{fontSize:"20px"}}>Reduced From $158 to $79</p>
                    <a className="nav-link main-phone fs-5 pt-0" href="tel:7038706927">Call</a>
                </div>
                <Contact />
            </div>
            <div className="contain-description">
                 <h1>Northern Virginia’s Preferred HVAC</h1>
                 <h2 className="contain-h2">Residential & Commercial HVAC & Plumbing Contractors in Northern Virginia</h2>
                 <p className="content-p">Need HVAC and plumbing services for your Leesburg, Alexandria, Winchester, or nearby home or business? For over half a century, M.E. Flow has provided HVAC and home comfort services to businesses and homeowners throughout Northern Virginia. You’re always in good hands with our team of NATE-certified technicians and advisors. We solve any heating, air conditioning, or plumbing problem you have and deliver unparalleled customer care and service. Searching for Northern Virginia’s finest HVAC and plumbing services? Contact M.E.</p>
                 <h3>Flow today or call one of our main locations: Boston (617) 888-0467</h3>
            </div>
            <h4 style={{marginBottom:"50px"}}>Testimonials</h4>
                 <Slider/>
        </div>
    )
}