import React from 'react';
import logo from '../images/nairalink.png';

export const Navbar = () => {
  return (
    <div className="navbar  bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <img src={logo} width="40" height="40" />
        </div>
        <a className="btn btn-ghost normal-case text-xl text-green-600">
          nairaLink
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-green-600">Sign in</a>
          </li>
          <li tabIndex={0}>
            <a className="text-green-600">
              Help
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a className="text-green-600">Contact us</a>
              </li>
              <li>
                <a className="text-green-600">FAQs</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="text-green-600">sign up</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="btn bg-green-600 text-white-400">Join nairaLink</a>
      </div>
    </div>
  );
};
