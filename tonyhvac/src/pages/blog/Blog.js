import "./Blog.css"


export default function Blog(){
    return (
        <div className="container row g-3 ">
            <div className="card col-lg-4 col-md-6 col-sm-12">
                <img src={require('../../images/photo2.jpg')} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">A CLEAN HOME IS A HAPPY HOME</h5>
                  <p className="card-text">
What comes to mind when you hear the words ‘happy home’? Do you think of a family that spends a lot of time together laughing and making memories, kids coming in from school and doing their homework together, sharing a healthy lifestyle with your family, or feeling loved and blesse</p>
                </div>
            </div>

            <div className="card col-lg-4 col-md-6 col-sm-12">
                <img src={require('../../images/photo3.jpg')} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">Residential Carpet, Tile and LVP Cleaning</h5>
                  <p className="card-text">Deep Clean Carpet Cleaning is your local family-owned resource for clean and healthy carpets, tile and LVP flooring in Blaine and all Loudoun 
                     County.</p>
                </div>
            </div>

            <div className="card col-lg-4 col-md-6 col-sm-12">
                <img src={require('../../images/photo7.jpg')} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">CARPET CLEANING RESIDENTIAL</h5>
                  <p className="card-text">Technicians deploy powerful steam-cleaning tools to break up stains, remove odor and leave floors looking fresh</p>
                </div>
            </div>

            <div className="card col-lg-4 col-md-6 col-sm-12">
                <img src={require('../../images/photo4.jpg')} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">CARPET CLEANING FOR RESTAURANTS</h5>
                  <p className="card-text">Carpet that is regularly cleaned will last longer than dirty, neglected carpet. Dirt, dust, sand, and ice salt are highly damaging to carpet fibers. They’ll make your floor look old before its time. With regular cleaning, you will prolong the carpet’s life and keep it looking good. You paid a lot for that carpet, and regular cleaning will protect your investment.</p>
                </div>
            </div>

            <div className="card col-lg-4 col-md-6 col-sm-12">
                <img src={require('../../images/photo5.jpg')} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">SIGNS YOU NEED NEW CARPETING</h5>
                  <p className="card-text">Your carpet style and color may have worked with your original decorating scheme, but things have changed. If you have new paint on the walls and new furniture, your old carpeting may look out of place.</p>
                </div>
            </div>

            <div className="card col-lg-4 col-md-6 col-sm-12">
                <img src={require('../../images/photo6.jpg')} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">CARPET CLEANING AND MAINTENANCE</h5>
                  <p className="card-text">Your home should be one of the healthiest places to be since you spend so much time there – Home is where life happens. Carpet cleanliness can affect indoor air quality which is a growing concern.</p>
                </div>
            </div>
        </div>
    )
}