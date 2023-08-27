import React from "react";

export const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <img className='header-logo' src='/logo/white.svg' alt='logo' />
        <div className='header-actions'>
          <span className='header-sign-in cur-p'>Sign In</span>
          <button className='header-btn cur-p'>Dukaan for PC</button>
        </div>
      </div>
    </header>
  );
};
