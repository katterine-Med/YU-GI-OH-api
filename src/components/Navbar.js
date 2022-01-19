import React from 'react'

const Navbar = ({brand}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href='/'>{brand}</a>
      </div>
    </nav>
  
  );
}
/*<img src={logo} className="App-logo" alt="logo" />*/
export default Navbar