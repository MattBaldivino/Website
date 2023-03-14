import React from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
	const year = new Date().getFullYear();
	return(
		<div className="h-auto w-100 d-inline-block footer-div" id="contact">
			<Container>
				<Row>
					<Col>
						<form>
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input type="text" className="form-control" />
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input type="email" className="form-control" aria-describedby="emailHelp" />
							</div>
							<div className="form-group">
								<label htmlFor="message">Message</label>
								<textarea className="form-control" rows="5"></textarea>
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</Col>
					<Col>
						
					</Col>
				</Row>
			</Container>
			<p className="center-text footer-text">Copyright © {year}</p>
		</div>
	)
} 

export default Footer;