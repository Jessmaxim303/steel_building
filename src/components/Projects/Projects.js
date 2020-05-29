import React from 'react';
import './Projects.css';
import works from '../Assets/works.png';

export const Projects = () => {
	const backgroundstyle = {
      background: `url(${works}) no-repeat center top`,
      backgroundSize: 'cover',
    }
	return (
		<section className="projects_main_container" style={backgroundstyle}>
		  <h1 className="projects_text_title">OUR STEEL BUILDINGS... YOUR PROJECTS!</h1>
		  <p className="projects_text_para">Great Western offers steel building systems that are designed for the ideal combination of flexibility, <br/>affordability and quality. All Great Western steel buildings are built with 100% U.S. products. <br/>This is a place where both our employees and our customers have made and continue to <br/>make a difference with their ideas and hard work.</p>
			<button className="projects_inquire_button">Inquire About Steel Building</button>
		</section>
		)
}