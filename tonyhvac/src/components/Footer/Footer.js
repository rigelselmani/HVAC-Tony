import "./Footer.css"
export default function Nav(){
    return (
        <footer>
            <a className="navbar-brand text-primary fs-2 fst-italic " style={{fontWeight:"bold", fontSize:"40px"}} href="/"><span className="text-bg-dark px-4 m-0">GR</span> Comfort</a>
            <p className="text-light mt-3">HOURS
              Monday - Friday
              8:00 AM - 5:00 PM</p>
        </footer>
    )
}