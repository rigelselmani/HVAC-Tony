import Contact from "./Contact";
import "./Home.css"

export default function Home(){
    return(
        <div className="contain">
            <div className="content">
                <div className="main">
                    <h1 className="main-h1">GR Comfort</h1>
                    <h5 className="main-h5">Heating & Cooling in  Quincy MA</h5>
                    <p className="main-text">FULL HVAC SYSTEM INSPECTION TUNE-UP TROUBLESHOOTING & INSTALL </p>
                    <p className="main-text" style={{fontSize:"20px"}}>The Best Prices in the area</p>
                    <a className="nav-link main-phone fs-5 pt-0" href="tel:6178880467">Call: 617-888-0467</a>
                </div>
                <Contact />
            </div>
            <div className="container overflow-hidden text-center">
              <h3 className="my-5 fs-1 text">Certified</h3>
              <div className="row gy-5 d-flex justify-content-center">
                <div className=" certification col-lg-3 col-md-6 col-xs-8">
                  <div className="p-3 bg-secondary text-light certification">Construction safety & health</div>
                </div>
                <div className="certification col-lg-3 col-md-6 col-xs-8">
                  <div className="p-3  bg-secondary text-light certification">EPA</div>
                </div>
                <div className="certification col-lg-3 col-md-6 col-xs-8">
                  <div className="p-3 bg-secondary text-light certification">Safety</div>
                </div>
                <div className="certification col-lg-3 col-md-6 col-xs-8">
                  <div className="p-3 bg-secondary text-light certification">Sheet Metal Worker</div>
                </div>
              </div>
            </div>
            <div className="contain-description">
                 <h1>Quincy’s Preferred HVAC</h1>
                 <h2 className="contain-h2">Residential HVAC in Quincy</h2>
                 <p className="content-p">Need HVAC services for your Quincy or nearby home? For over 10 years Tony has provided HVAC and home comfort services to homeowners throughout Queency. You’re always in good hands with our team of Tony's-certified technicians and advisors. We solve any heating, air conditioning problem you have and deliver unparalleled customer care and service. Searching for Masachuset’s finest HVAC services? Tony HVAC Services</p>
                 <h3 className="office">Call our Office: Quincy <br></br> (617) 888-0467 <br></br>  Tonyhvacquincy@gmail.com</h3>
            </div>
        </div>
    )
}