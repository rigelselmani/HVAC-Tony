import "./Navbar.css"


export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg container bg-white sticky-top border-bottom">
            <div className="container-fluid">
               <div className="d-flex flex-row">
                  <a className="navbar-brand text-primary fst-italic logo-nav"  href="/">GR</a>
                  <div className="logo-box">
                     <img className="logo" src={require('../../images/hot-cold.jpg')} alt="logo" />
                     <p className="logo-text float-left text-primary fs-4 fst-italic m-0 ">Comfort</p>
                  </div>
               </div>
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
                    <a className="nav-link text-dark fs-5" href="/schedule">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="/blog">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link phone text-dark fs-5 pt-0" href="tel:6178880468"><span className="material-symbols-outlined pt-0">
phone_in_talk
</span></a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    )
}