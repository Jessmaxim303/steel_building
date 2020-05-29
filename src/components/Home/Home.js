import React from 'react';
import './Home.css';
import { Header } from '../Header/Header.js';
import redsteel from '../Assets/barn.png';

export const Home = () => {
	return (
		<section>
		  <Header/>
		  <section className="home_main_container">
		  	<div className="home_intro_welcome inner-border">
		  	  <div className="home_info_container">
		  	    <h1 className="home_intro_text">PREMIUM PRE-ENGINEERED <br/> STEEL BUILDINGS</h1>
		  		  <button className="home_quote_button">Request a Quote</button>
		  		  <button className="home_product_button">View Out Steel Buildings</button>
		  		</div>  
		  		<img className="home_redsteel_img" src={redsteel}/>
		  	</div>
		    <section className="home_alert">
		      <h2>
		        COVID-19 UPDATE 
		      </h2>
		      <h3>WE’RE HERE FOR OUR CUSTOMERS AND EMPLOYEES. <br/> SEE THIS MESSAGE FROM OUR FOUNDERS FOR <br/> MORE INFORMATION.
          </h3>
		    </section>
		  </section>
		</section>  
		)
}