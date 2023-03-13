import React from "react";

function Footer(){
	const year = new Date().getFullYear();
	return(
		<div className="footer-div">
			<footer className="center-text">
				<p>Copyright © {year}</p>
			</footer>
		</div>
	)
} 

export default Footer;