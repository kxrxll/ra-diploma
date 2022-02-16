import React from 'react';
import logo from './../img/banner.jpg'

function Banner() {
  return (
    <div className="banner">
      <img src={logo} className="img-fluid" alt="К весне готовы!" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  )
}

export default Banner;