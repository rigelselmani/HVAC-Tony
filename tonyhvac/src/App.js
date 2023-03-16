import { Route, Switch, BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/blog/Blog";
import Schedule from "./pages/Schedule/Schedule";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar />
              <Switch>
                <Route exact path="/">
                   <Home />
                </Route>
                <Route path="/about">
                   <About />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/schedule">
                <Schedule />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>

            </Switch>
          </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
