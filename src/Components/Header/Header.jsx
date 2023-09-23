import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-base font-medium text-[#757575]"><NavLink to="/">Home</NavLink></li>
                            <li className="text-base font-medium text-[#757575]"><NavLink to="/statistics">Statistics</NavLink></li>
                            <li className="text-base font-medium text-[#757575]"><NavLink to="/applied">Applied Jobs</NavLink></li>
                            <li className="text-base font-medium text-[#757575]"><NavLink to="/blog">Blog</NavLink></li>
                        </ul>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[#1A1919]">CareerHub</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-base font-medium text-[#757575]"><NavLink to="/">Home</NavLink></li>
                        <li className="text-base font-medium text-[#757575]"><NavLink to="/statistics">Statistics</NavLink></li>
                        <li className="text-base font-medium text-[#757575]"><NavLink to="/applied">Applied Jobs</NavLink></li>
                        <li className="text-base font-medium text-[#757575]"><NavLink to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="text-xl font-extrabold text-[#fff] px-3 py-3 lg:px-7 lg:py-5 bg-[#9873FF] rounded-lg">Star Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;