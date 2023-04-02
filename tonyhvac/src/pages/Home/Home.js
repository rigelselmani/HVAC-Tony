import Contact from "./Contact";
import "./Home.css"

export default function Home(){
    return(
        <div className="contain">
            <div className="content">
                <div className="main">
                    <h1 className="main-h1">Heating & Cooling Company in  Quincy Masachusets</h1>
                    <p style={{fontSize:"27px"}}>FULL HVAC SYSTEM INSPECTION TUNE-UP TROUBLESHOOTING & INSTALL </p>
                    <p style={{fontSize:"20px"}}>The Best Prices in the area</p>
                    <a className="nav-link main-phone fs-5 pt-0" href="tel:7038706927">Call</a>
                </div>
                <Contact />
            </div>
            <div className="container overflow-hidden text-center">
              <h3 className="mb-5 fs-1 text">Certified</h3>
              <div className="row gy-5">
                <div className="col-3">
                  <div className="p-3 bg-secondary certification">Construction safety & health</div>
                </div>
                <div className="col-3">
                  <div className="p-3  bg-secondary certification">EPA</div>
                </div>
                <div className="col-3">
                  <div className="p-3 bg-secondary certification">Safety</div>
                </div>
                <div className="col-3">
                  <div className="p-3 bg-secondary certification">Sheet Metal Worker</div>
                </div>
              </div>
            </div>
            <div className="contain-description">
                 <h1>Qeency’s Preferred HVAC</h1>
                 <h2 className="contain-h2">Residential HVAC in Qeency</h2>
                 <p className="content-p">Need HVAC services for your Queency or nearby home? For over 10 years Tony has provided HVAC and home comfort services to homeowners throughout Queency. You’re always in good hands with our team of Tony's-certified technicians and advisors. We solve any heating, air conditioning problem you have and deliver unparalleled customer care and service. Searching for Masachuset’s finest HVAC services? Tony HVAC Services</p>
                 <h3>Flow today or call one of our main locations: Boston (617) 888-0467</h3>
            </div>
        </div>
    )
}