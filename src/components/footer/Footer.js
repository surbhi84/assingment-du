import React from "react";

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='flex-row footer-container'>
        <img src='/logo/white.svg' alt='dukaan_logo' className='footer-logo' />
        <div className='flex-row footer-links-div'>
          <div className='flex-column footer-links'>
            <span>Contact</span>
            <span>FAQ's</span>
          </div>
          <div className='flex-column footer-links'>
            <span>Tutorials</span>
            <span>Blog</span>
          </div>
          <div className='flex-column footer-links'>
            <span>Privacy</span>
            <span>Banned Items</span>
          </div>
          <div className='flex-column footer-links'>
            <span>About</span>
            <span className="flex-row">
              Jobs
              <div className="bg-circle">
                3
              </div>
            </span>
          </div>
          <div className='flex-column footer-links'>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
      <div className='footer-divider' />
      <div className='flex-row footer-links'>
        <small>Dukaan 2020, All rights reserved.</small>
        <div className='flex-row footer-closing'>
          <small>Made in </small>
          <img src='/images/flag.svg' alt='indian_flag' />
        </div>
      </div>
    </div>
  );
};
