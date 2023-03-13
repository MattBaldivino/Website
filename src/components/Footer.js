import React from "react";

function Footer(){
	const year = new Date().getFullYear();
	return(
		<div className="footer-div" id="contact">
			<p className="center-text footer-text">Copyright © {year}</p>
		</div>
	)
} 

export default Footer;