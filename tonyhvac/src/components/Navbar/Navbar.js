import "./Navbar.css"


export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg container bg-white sticky-top border-bottom">
            <div className="container-fluid">
              <a className="navbar-brand text-success fs-2 fst-italic " style={{fontWeight:"bold", fontSize:"40px"}} href="/"><span className="text-bg-dark px-4 mt-5">Tony</span> HVAC</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse text-dark display-flex justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link text-dark fs-5" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="/schedule">Schedule Now</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="/blog">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="/blog">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link phone text-dark fs-5 pt-0" href="tel:7038706927"><span className="material-symbols-outlined pt-0">
phone_in_talk
</span></a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    )
}