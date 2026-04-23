import {House,Send,UserStar,IdCardLanyard,Phone} from 'lucide-react'


import logoVaybe from "../../assets/logoVaybe.png"

function Navbar({actualPage}) {
    return (
        <div className="navbar bg-cobalt-blue-50 absolute top-0 left-0 right-0 w-full">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-cobalt-blue-50 h-screen rounded-box z-1 w-72 p-5 shadow">
                    <li><a href="/" className={`${actualPage == "homePage" ? "active" : ""}`}><House/> Home</a></li>
                    <li><a href="/submit" className={`${actualPage == "employeePage" ? "active" : ""}`}><Send/> Postuler</a></li>
                </ul>
                </div>
                <a className=""><img src={logoVaybe} className="w-32 h-16" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a href="/" className={`grid items-center ${actualPage == "homePage" ? "active" : ""}`}><House/>Home</a></li>
                <li><a href="/submit" className={`${actualPage == "employeePage" ? "active" : ""}`}><Send/> Postuler</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://www.vaybe.tech' target="_blank" className="btn bg-cobalt-blue-700 hover:bg-cobalt-blue-600 text-white"><Phone/><span className="hidden md:inline">Contactez-nous</span></a>
            </div>
        </div>
    );
}

export default Navbar;