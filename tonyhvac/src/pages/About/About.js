
export default function About(){
    return (
            <div className="" >
                <div className="card col-sm-6 mb-5" style={{margin:"auto"}}>
                  <h3 className="card-title">Company Background</h3>
        
                  <img src={require('../../images/photo2.jpg')} className="card-img-top" alt="about"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum ligula sit amet mi tempus vehicula. Phasellus mattis malesuada imperdiet. Nulla nec hendrerit magna, et rhoncus magna. Nullam porta sed odio dignissim tempor. In a accumsan dui. Donec et sodales lorem. Praesent fringilla mollis dolor, commodo tincidunt elit sodales non. Proin malesuada erat id enim sollicitudin, nec blandit dui vestibulum</p>
                  </div>
                </div>
        
                <div className="mapouter my-5 ">
                <p className="fs-3 text">Address</p>
                    <div className="gmap_canvas ">
                        <iframe className="col-lg-9 col-md-9 "  height="300" id="gmap_canvas" title="map" src="https://maps.google.com/maps?q=807%20Edwards%20Ferry%20Rd%20NE&t=&z=13&ie=UTF8&iwloc=&output=embed">
                        </iframe>
                    </div>
                </div>

                <div className="row bs-secondary-bg p-0">
                    <div className="col-sm-4 p-0">
                      <div className="card bg-secondary">
                        <div className="card-body">
                          <h5 className="card-title">Service area</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 p-0">
                      <div className="card bg-secondary">
                        <div className="card-body">
                          <h5 className="card-title">Service area</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 p-0">
                      <div className="card bg-secondary">
                        <div className="card-body">
                          <h5 className="card-title">Service area</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
    )
}