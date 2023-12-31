

const Navbar = () => {

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-blue-800"><a>Home</a></li>
                            <li className="text-blue-800"><a>Urgent Care</a></li>
                            <li className="text-blue-800"><a>Mental Health</a></li>
                            <li className="text-blue-800"><a>About Us</a></li>
                        </ul>
                    </div>
                    <a><img className="" src="https://i.ibb.co/JCGV8rK/pngwing-11.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-blue-800"><a>Home</a></li>
                        <li className="text-blue-800"><a>Urgent Care</a></li>
                        <li className="text-blue-800"><a>Mental Health</a></li>
                        <li className="text-blue-800"><a>About Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline mr-5 w-32">Log In</button>
                    <button className="btn  bg-blue-800 text-white w-32">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;