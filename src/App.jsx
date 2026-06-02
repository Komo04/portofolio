import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/About";
import Pemograman from "./components/Pemograman";
import Projects from "./components/Projects";
import "./index.css";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Pemograman />
            <Projects />
            
        </div>
    );

}

export default App
