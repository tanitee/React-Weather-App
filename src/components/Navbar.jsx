import React from 'react'
import logo from '../assets/images/logo.svg'
import units from '../assets/images/icon-units.svg'
import { useState } from 'react'

const Navbar = () => {
    const [unit, setUnit] = useState("");
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Units");

    const handleSelect = (unitSystem) => {
        setSelected(unitSystem);
        setOpen(false);
    };
  return (
    <nav className="navbar">
        <div> 
            <img src={logo} alt="" className='logo'/>
        </div>
        
    <div className="units-dropdown">
      <button className="units-btn" onClick={() => setOpen(!open)}>
        <img src={units} alt="" className='unit-logo' /> {selected} ▼
      </button>

      {open && (
        <div className="units-menu">
          <p className="menu-header">Switch to Imperial</p>

          <div className="menu-section">
            <h4>Temperature</h4>
            <button onClick={() => handleSelect("Celsius (°C)")}>Celsius (°C)</button>
            <button onClick={() => handleSelect("Fahrenheit (°F)")}>Fahrenheit (°F)</button>
          </div>

          <div className="menu-section">
            <h4>Wind Speed</h4>
            <button onClick={() => handleSelect("km/h")}>km/h</button>
            <button onClick={() => handleSelect("mph")}>mph</button>
          </div>

          <div className="menu-section">
            <h4>Precipitation</h4>
            <button onClick={() => handleSelect("Millimeters (mm)")}>Millimeters (mm)</button>
          </div>
        </div>
      )}
    </div>
        
        
    </nav>
  )
}

export default Navbar