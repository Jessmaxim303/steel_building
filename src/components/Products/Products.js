import React from 'react';
import './Products.css';
import redsteel from '../Assets/barn.png';
import aggie from '../Assets/aggie.png';
import airplane from '../Assets/airplane.png';

export const Products = () => {
	return (
		<section className="products_main_container">

		  <h1 className="products_intro_text">
		    OUR STEEL BUILDINGS
		  </h1>

		  <div className="products_item_main">
		    <section className="products_item_container product_inner_border">
		  	  <img className="product_redsteel_img" src={redsteel}/>
		  	  <h1 className="product_aggie_text">
		  	    AGRICULTURAL STRUCTURES
		  	  </h1>
		  	  <p className="product_title_para">
		  		  Ranchers, farmers, dairy producers we offer exceptional value for Machine and Equipment Storage, Commodity and Hat Storage, Livestock Shelter and Barns, Dairy and Feed Facilities
		  	  </p>
		      <button className="product_qoute_button">AGRICULTURAL DETAILS</button>
		    </section>

		    <section className="products_item_container product_inner_border">
		  	  <img className="product_aggie_img" src={aggie}/>
		  	  <h1 className="product_industry_text">
		  	    INDUSTRIAL STRUCTURES
		  	  </h1>
		  	  <p className="product_title_para">
		  		  Ranchers, farmers, dairy producers we offer exceptional value for Machine and Equipment Storage, Commodity and Hat Storage, Livestock Shelter and Barns, Dairy and Feed Facilities
		  	  </p>
		      <button className="product_qoute_button">AGRICULTURAL DETAILS</button>
		    </section>

		    <section className="products_item_container product_inner_border">
		  	  <img className="product_aggie_img" src={airplane}/>
		  	  <h1 className="product_title_text">
		  	    AIRPLANE HANGERS
		  	  </h1>
		  	  <p className="product_title_para">
		  		  Ranchers, farmers, dairy producers we offer exceptional value for Machine and Equipment Storage, Commodity and Hat Storage, Livestock Shelter and Barns, Dairy and Feed Facilities
		  	  </p>
		      <button className="product_qoute_button">AGRICULTURAL DETAILS</button>
		    </section>

      </div>

		  </section>
		)
}