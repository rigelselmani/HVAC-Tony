export default function Slider (){
    return (
        <div id="carouselExample" className="carousel slide bg-secondary text-white p-5 fs-5 text">
          <div className="carousel-inner d-flex justify-content-center">
            <div className="carousel-item active">
              <p className="d-block w-100">Raul from M.E. Flow came to our home to perform a number of plumbing jobs: a new toilet, a new kitchen faucet, a new disposal, and a new outside hose bib. He completed all of the work within one afternoon. Raul was very professional — he tested all of his work to make sure we were satisfied, which we were highly satisfied. He was very respectful of our house and its contents, and was an all-around pleasure to work with. We will definitely request Raul the next time we need plumbing service. — Ben</p>
            </div>
            <div className="carousel-item">
               <p className="d-block w-100">We recently spoke to four companies regarding replacement of our aging furnace and AC. As a result we chose M.E. Flow. If you are in the market for a new HVAC System I highly recommend you call M.E. Flow and ask for Home Comfort Advisor Pete LoBello. Pete’s knows the business and his easy-going style coupled with superior product knowledge are a winning combination. Throughout the process Pete patiently listened to our needs and asked a number of excellent questions to make sure that he understood our situation in terms of budget and product. He also provided us an excellent overview of M.E. Flow’s installation and service departments. He suggested three different product recommendations within our budget. The installation of the system was exactly as described and he even followed up with us to ensure our satisfaction. Pete and M.E. Flow definitely were the right choice for our family and likewise for you. Thanks Pete for a job well done! — David</p>
            </div>
            <div className="carousel-item">
              <p className="d-block w-100">I had to replace my entire HVAC system and the process with M.E. Flow was easy, quick, and professional. Several members of the team came into my home, all were friendly, competent, and did great work. Pete is wonderful, helpful, and on top of communicating with customers. I’ll continue to depend on M.E. Flow for all HVAC needs! — Katie</p>
            </div>
          </div>
          <button className="carousel-control-prev text-white" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next text-white" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    )
}