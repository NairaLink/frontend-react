import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title text-green-600">Features</span>
        <a className="link link-hover">nairaLink card</a>
        <a className="link link-hover">Investments</a>
        <a className="link link-hover">Spend</a>
        <a className="link link-hover">Save</a>
        <a className="link link-hover">Budget</a>
        <a className="link link-hover">Borrow</a>
      </div>
      <div>
        <span className="footer-title text-green-600">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Join our Team</a>
      </div>
      <div>
        <span className="footer-title text-green-600">Help</span>
        <a className="link link-hover">FAQs</a>
        <a className="link link-hover">Security</a>
        <a className="link link-hover">Contact Us</a>
      </div>
      <div>
        <span className="footer-title text-green-600">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-green-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
