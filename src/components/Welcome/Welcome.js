import React from 'react';
import './Welcome.css';
import redsteel from '../Assets/barn.png';

export const Welcome = () => {
	return (
    <section className="home_main_container">
		  <div className="home_intro_welcome inner-border">
		  	  <div className="home_info_container">
		  	    <h1 className="home_intro_text">PREMIUM<br/>PRE-ENGINEERED<br/>STEEL BUILDINGS</h1>
		  		  <button className="home_quote_button">Request a Quote</button>
		  		  <button className="home_product_button">View Out Steel Buildings</button>
		  		</div>  
		  		<img className="home_redsteel_img" src={redsteel}/>
		  	</div>
		    <section className="home_alert">
		      <h2 className="home_alert_title">
		        COVID-19 UPDATE 
		      </h2>
		      <h3 className="home_alert_para">WE’RE HERE FOR OUR CUSTOMERS AND EMPLOYEES. <br/> SEE THIS MESSAGE FROM OUR FOUNDERS FOR <br/> MORE INFORMATION.
          </h3>
		    </section>
	</section>
	)
}