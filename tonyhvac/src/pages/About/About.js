import Slider from "./Slider"
import "./About.css"

export default function About(){
    return (
            <div>
                <div className="container text-center ">
                  <div className="row">
                    <h3 className="mb-4">Company Background</h3>
                    <div className="col mt-4">
                       <img className="background-img" src={require('../../images/tony.jpg')} alt="about"/>
                    </div>
                    <div className="col mt-4 background-text">
                       <p className="background">Family-owned business, Tony HVAC. was founded in 2010 by Tony. Tony was looking for an 
                                  opportunity to serve his local community while living in Quincy with his family. The area was in need of a dependable, 
                                  trustworthy, and quality HVAC contractor.</p>
                        <p className="background">Today, Tony HVAC Services. has three locations serving the entire  Quincy area including a host
                                   of licensed and highly-trained heating, cooling, and plumbing technicians.</p>
                        <p className="background">
                        Our team is specialized in installing,Servicing and maintaining on any central air ducted and mini splits systems.Also we qualified to work with latest technologies on heat pomp and hyper heat most efficient systems.Our goal is to provide service on time and high quality work.We are proud to work with the best brands in market as Mitsubishi,LG,Trane,American Standard,Carrier etc
For more information you can call or email us any time
                        </p>
                    </div>
                  </div>
                </div>

                <div className="mapouter my-5 ">
                    <p className="fs-3 text">Our Office</p>
                    <div className="gmap_canvas ">
                        <iframe className="col-lg-9 col-md-9 "  height="300" id="gmap_canvas" title="map" src="https://maps.google.com/maps?q=807%20Edwards%20Ferry%20Rd%20NE&t=&z=13&ie=UTF8&iwloc=&output=embed">
                        </iframe>
                    </div>
                </div>

                <div className="row bs-secondary-bg mb-5 mx-auto">
                    <div className="col-sm-4">

                    </div>
                    <div className="col-sm-4">
                      <div className="card p-0">
                        <div className="card-body service-area  text-bg-light">
                          <h5 className="card-title">Service area</h5>
                          <p className="card-text">1025 hANCOCK ST, Quincy, MA 02169</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">

                    </div>
                </div>
                <Slider/>

            </div>

    )
}