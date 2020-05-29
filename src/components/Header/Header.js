import React from 'react';
import './Header.css';
import logo from '../Assets/logo.png';

export const Header = () => {
	return (
		<section className="header_container">
		  <img className="header_logo" src={logo}/>
		  <div className="header_menu_container">
		    <h1>1(800)497-2135</h1>
			  <h1>HOME</h1>
			  <h1>STEEL BUILDINGS</h1>
			  <h1>PROJECTS</h1>
			  <h1>REGIONAL</h1>
			  <h1>ABOUT</h1>
			  <h1>CONTACT</h1>
			</div>  
		</section>
		)
}