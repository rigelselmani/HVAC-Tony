import Contact from "./Contact";
import "./Home.css"

export default function Home(){
    return(
        <div className="content">
            <div className="main">
                <h1 className="main-h1">HEATING COMPANY IN Masachusets</h1>
                <p style={{fontSize:"27px"}}>FULL HVAC SYSTEM INSPECTION AND TUNE-UP</p>
                <p style={{fontSize:"20px"}}>Reduced From $158 to $79</p>
                <a className="nav-link main-phone text-dark fs-5 pt-0" href="tel:7038706927">Call</a>
            </div>
            <Contact />
        </div>
    )
}