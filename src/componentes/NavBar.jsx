import React from 'react'
import logo from '../images/logo.jpg'
import navBar from '../css/NavBar.css'
import CartWidget from './CartWidget.jsx'

 
const NavBar = () => {
  return (
      <header>
           
          <navBar>
              <div className="container-logo">
              <img src={logo} alt="" className="logo-img" />
              <h1>Trip Store</h1>
              </div>
        <div className='container-menu'>
        
        <h3>Paquetes
            <ul className="lista">
            </ul>
        </h3>
        <h3>Vuelos</h3>

        <h3>Ofertas</h3>
        <CartWidget/>
        </div>

        
        

        </navBar>
    </header>
  )
}

export default NavBar