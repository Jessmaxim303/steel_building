import React from 'react';
import './Home.css';
import { Header } from '../Header/Header.js';
import { Welcome } from '../Welcome/Welcome.js';
import { Products } from '../Products/Products.js';
import { Services } from '../Services/Services.js';
import { Projects } from '../Projects/Projects.js';

export const Home = () => {
	return (
		<section>
		  <Header/>
		  <Welcome/>
		  <Products/>
		  <Services/>
		  <Projects/>
		</section>  
		)
}