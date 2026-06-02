
import { useState } from 'react'
function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('home');
    return (

        <nav className="bg-black text-white font-mono w-full sticky top-0 z-50">
            <div className="mx-auto px-6 md:px-16 py-4  flex justify-between items-center ">
                <a href="#home" onClick={() => {
                    setActive("home");
                }}><img src="/logo.jpg" alt="Profile" className="w-12" /></a>
                <div className=" hidden md:flex gap-12 ">
                    <a href="#home" onClick={() => setActive('home')} className={active === "home" ? "text-blue-500" : ""}>Home</a>
                    <a href="#about" onClick={() => setActive('about')} className={active === "about" ? "text-blue-500" : ""}>About</a>
                    <a href="#pemograman" onClick={() => setActive('pemograman')} className={active === "pemograman" ? "text-blue-500" : ""}>Pemograman</a>
                    <a href="#projects" onClick={() => setActive('projects')} className={active === "projects" ? "text-blue-500" : ""}>Projects</a>

                </div>
                <div className='hidden md:block'>
                    <a href="https://wa.me/62881038033616"
                        target="_blank"
                        rel="noopener noreferrer" className='border-2  border-blue-300 rounded-md px-3 py-1'>Contact me</a>
                </div>
                <button className='md:hidden text-2xl'
                    onClick={() => setOpen(!open)} aria-label='toggle menu'
                    aria-expanded={open}
                >
                    <img src="/Vector.png" alt="Profile" className="w-4 h-4" />
                </button>
            </div>
            {open && (
                <div className='md:hidden grid grid-cols-1 text-center gap-2 '>
                    <a href="#home" onClick={() => {
                        setActive('home');
                        setOpen(false);
                    }} className={active === "home" ? "text-blue-500" : ""}>Home</a>
                    <a href="#about" onClick={() => {
                        setActive('about');
                        setOpen(false);
                    }} className={active === "about" ? "text-blue-500" : ""}>About</a>
                    <a href="#pemograman" onClick={() => {
                        setActive('pemograman');
                        setOpen(false);
                    }} className={active === "pemograman" ? "text-blue-500" : ""}>Pemograman</a>
                    <a href="#projects" onClick={() => {
                        setActive('projects');
                        setOpen(false);
                    }} className={active === "projects" ? "text-blue-500" : ""}>Projects</a>

                    <div>
                        <a
                            href="https://wa.me/62881038033616"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-blue-300 rounded-md px-3 py-1"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            )}
        </nav>

    );
}
export default Navbar
