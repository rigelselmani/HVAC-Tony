export default function Slider (){
    return (
      <div id="carouselExampleDark" className="carousel carousel-dark slide bg-secondary m-2">
      <div className="carousel-indicators text-white">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="carousel-caption d-md-block">
          <h1 className="text-white-50">Testimonials</h1>
            <p className="text-light">
We recently spoke to four companies regarding replacement of our aging furnace and AC. As a result we chose Tony. If you are in the market for a new HVAC System I highly recommend you call Tony. Tony knows the business and his easy-going style coupled with superior product knowledge are a winning combination. Tony definitely were the right choice for our family and likewise for you. Thanks Pete for a job well done! — David
</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <div className="carousel-caption d-md-block">
          <h1 className="text-white-50">Testimonials</h1>
            <p className="text-light">
Tony came to our home to perform a number of jobs, He completed all of the work within one afternoon. Tony was very professional — he tested all of his work to make sure we were satisfied, which we were highly satisfied. He was very respectful of our house and its contents, and was an all-around pleasure to work with. We will definitely request Tony the next time we need AC service. — Ben
</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption d-md-block">
          <h1 className="text-white-50">Testimonials</h1>
            <p className="text-light">I had to replace my entire HVAC system and the process with M.E. Flow was easy, quick, and professional. Several members of the team came into my home, all were friendly, competent, and did great work. Pete is wonderful, helpful, and on top of communicating with customers. I’ll continue to depend on M.E. Flow for all HVAC needs! — Katie

</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden text-white">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden text-white">Next</span>
      </button>
    </div>
    )
}