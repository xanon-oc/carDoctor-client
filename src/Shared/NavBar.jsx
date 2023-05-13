import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AuthContext } from "../Providers/AuthProvider";
const NavBar = () => {
  const { user, logoutHandler } = useContext(AuthContext);
  const signOut = () => {
    logoutHandler()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  console.log(user);
  return (
    <div className="navbar  bg-base-100 h-16 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">About</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link to="/bookings">My Bookings</Link>
            </li>

            {user === null ? (
              <div>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signUp">SignUp</Link>
                </li>
              </div>
            ) : (
              <div>
                <button className="text-black" onClick={signOut}>
                  LogOut
                </button>
              </div>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="h-14 w-14" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link>Home</Link>
          </li>
          <li tabIndex={0}>
            <Link>About</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link to="/bookings">My Bookings</Link>
          </li>
          {user === null ? (
            <div className="flex">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signUp">SignUp</Link>
              </li>
            </div>
          ) : (
            <div className="flex">
              <button className="" onClick={signOut}>
                LogOut
              </button>
            </div>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? <p>{user.email}</p> : ""}
        <button className=" btn btn-outline btn-secondary border-[#FF3811] text-[#FF3811] hover:border-none hover:bg-[#C00093]">
          appointment
        </button>
      </div>
    </div>
  );
};

export default NavBar;
