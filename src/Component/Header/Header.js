import React from 'react';
//import logo from '../../../assets/investment-calculator-logo.png'
//import logo12 from 'C:\Users\kalya\Documents\react\investment-calculator\src\logo12.png'
import logo from '../logo12.png';


function Header(props) {
    return (
        <div>
             <header className='header'>
                {/* <img src ={logo} alt='logo'/> */}
      <img src={logo} alt='logo'/> 
      <h2 style={{color:'gold',fontFamily:'italic'}}>Royal Finanacial Calculator</h2>
    </header>
        </div>
    );
}

export default Header;