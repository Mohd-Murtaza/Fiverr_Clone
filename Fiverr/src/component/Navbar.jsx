import React, { useContext } from 'react'
import "../styles/Navbar.css"
import fiverLogo from '../assets/fiverrLogo.webp'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import NavMenu from '../utils/NavMenu.jsx'
import Join from '../utils/Join.jsx';
import Sigin from '../utils/Signin.jsx';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextProvider.jsx';
import ProfileMenu from '../utils/ProfileMenu.jsx';
const Navbar = () => {
  const {isAuth}=useContext(AuthContext)
  const isFullWidth=useMediaQuery({minWidth:1050})
  return (
   <div id='NavbarMainDiv'>
     <div className="NavbarDiv">
      <div className='navbarMenuDiv'><NavMenu/></div>
      <div className='navbarBrandLogoDiv'>
          <img className='navbarBrandLogo' src={fiverLogo}/>
      </div>
      <div className='navbarSearchDiv'>
          <input className='navbarSearchInp' type="text" placeholder='What service you are looking for today...'/>
          <button className='navbarSearchBtn'><HiMiniMagnifyingGlass className='navbarSearchBtnIcon' /></button>
      </div>
      <div className='navbarTabsDiv'>
            <li className='navbarLi' type="none">Fiverr Pro <MdKeyboardArrowDown className='navbarLiIcon' /></li>
            <li className='navbarLi' type="none">Explore <MdKeyboardArrowDown className='navbarLiIcon' /></li>
            {isFullWidth?<li className='navbarLi' type="none"><IoIosGlobe className='navbarLiIcon'/> English</li>:<li type="none"></li>}
            <li className='navbarLi' type="none">Become a Seller</li>
            {!isAuth?(
              <>
              <li className='navbarLi' type="none" ><Sigin/></li>
              <li className='navbarLi' type="none" ><Join/></li>
              </>
            ):<ProfileMenu/>}
      </div>
    </div>
   </div>
  )
}

export default Navbar
