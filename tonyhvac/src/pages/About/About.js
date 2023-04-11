import Slider from "./Slider"
import "./About.css"

export default function About(){
    return (
            <div>
                <div className="about-content text-center ">
                  <div className="row ">
                    <h3 className=" about-head mb-4 mt-2">Company Background</h3>
                    <div className="col-lg-6 col-md-12 mt-4">
                       <img className="tony-img" src={require('../../images/tony1.jpg')} alt="about"/>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-4 about-info">
                       <p className="about-text">Family-owned business, Tony HVAC. was founded in 2010 by Tony. Tony was looking for an 
                                  opportunity to serve his local community while living in Quincy with his family. The area was in need of a dependable, 
                                  trustworthy, and quality HVAC contractor.</p>
                        <p className="about-text">Today, Tony HVAC Services. works in Quincy area including a host
                                   of licensed and highly-trained heating, and cooling technicians.</p>
                        <p className="about-text">
                        Our team is specialized in installing,Servicing and maintaining on any central air ducted and mini splits systems.Also we qualified to work with latest technologies on heat pomp and hyper heat most efficient systems.Our goal is to provide service on time and high quality work.
For more information you can call or email us any timey
                        </p>
                    </div>
                   
                  </div>
                </div>
                <div className="container text-center">
                  <h4>We are proud to work with the best brands in market as</h4>
                  <div className="row align-items-center py-3">
                      <div className="col-lg-2 col-md-4 col-sm-6 mt-3 col-xs-12">
                        <img className="brand" src={require('../../images/American.jpg')} alt="brand"/>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 mt-3 col-xs-12">
                        <img className="brand" src={require('../../images/carrier.jpg')} alt="brand"/>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 mt-3 col-xs-12">
                         <img className="brand" src={require('../../images/bosch.jpg')} alt="brand"/>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 mt-3 col-xs-12">
                         <img className="brand" src={require('../../images/fujitsu.jpg')} alt="brand"/>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 mt-3 col-xs-12">
                         <img className="brand" src={require('../../images/goodman.jpg')} alt="brand"/>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 mt-3 col-xs-12">
                         <img className="brand" src={require('../../images/mitsubishi.jpg')} alt="brand"/>
                      </div>
                    </div>
                </div>

                <div className="mapouter my-5 ">
                    <p className="fs-3 text">Location</p>
                    <div className="gmap_canvas ">
                        <iframe className="col-lg-9 col-md-9 "  height="300" id="gmap_canvas" title="map" src="https://maps.google.com/maps?q=1025%20Hancock%20St&t=&z=13&ie=UTF8&iwloc=&output=embed">
                        </iframe>
                    </div>
                </div>

                <div className="row bs-secondary-bg mb-5 mx-auto">
                    <div className="col-lg-3 col-sm-2">

                    </div>
                    <div className="col-lg-6 col-sm-8">
                      <div className="card p-0">
                        <div className="card-body service-area  text-bg-light">
                          <h3 className="card-title">Our Office</h3>
                          <p className="card-text">1025 HANCOCK ST, Quincy, MA 02169</p>
                          <h4 className="">Call: (617) 888-0467</h4>
                          <a className="nav-link main-phone fs-5 pt-0" href="tel:7038706927">Call Today</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-2">

                    </div>
                </div>
                <Slider/>

            </div>

    )
}