import React from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
	const year = new Date().getFullYear();
	const ContactForm = () => (
		<form method="POST">
		  <label htmlFor="name">Name</label>
		  <input type="text" name="name" />
	     
		  <label htmlFor="email">Email</label>
		  <input type="email" name="email" />
	     
		  <label htmlFor="message">Message</label>
		  <textarea name="message" rows="3"></textarea>
	     
		  <input type="submit" />
		</form>
	)

	return(
		<div className="h-auto w-100 d-inline-block footer-div" id="contact">
			<h1 style={{fontSize: 100, padding: 70}} className="center-text">Contact Me</h1>
			<Container>
				<Row>
					<Col>
						<div className="contact-div">
							<form method="POST">
								<label htmlFor="name"><p>Name</p></label>
								<input type="text" name="name" />
							
								<label htmlFor="email"><p>Email</p></label>
								<input type="email" name="email" />
							
								<label htmlFor="message"><p>Message</p></label>
								<textarea name="message" rows="3"></textarea>
							
								<input id="send" type="image" src="https://cdn-icons-png.flaticon.com/512/7973/7973147.png" border="0" alt="Submit" />
							</form>
						</div>
					</Col>
					<Col>
						<div className="contact-div">
							<h3>My Contacts</h3>
							<p>Work Email: matt.a.baldivino@gmail.com</p>
							<p>School Email: mabaldivino@cpp.edu</p>
						</div>
					</Col>
				</Row>
			</Container>
			<div id="link-div">
				<p id="link-text" style={{padding: 25, fontSize: 14, verticalAlign: 'middle'}} className="center-text">
					Copyright © Matthew Baldivino {year}
					<a href="https://www.linkedin.com/in/matthew-baldivino123"><img style={{marginLeft: 10}}className="links" src="https://cdn-icons-png.flaticon.com/512/145/145807.png"/></a>
					<a href="https://github.com/MattBaldivino"><img className="links" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"/></a>
					
				</p>
			</div>
		</div>
	)
} 

export default Footer;