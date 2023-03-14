import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";



function App() {
	return(
		<BrowserRouter>
			<div className="App">
				
				<div id="nav">
					<div id="name">
						<h3>Matthew Baldivino</h3>
					</div>
					<table align="right">
						<tr>
							<th>
								<Link className="nav-text" to="#header" smooth>
									About
								</Link>
							</th>
							<th>
								<Link className="nav-text" to="#skills-div" smooth>
									Skills
								</Link>
							</th>
							<th>
								<Link className="nav-text" to="#project-div" smooth>
									Projects
								</Link>
							</th>
							<th>
								<Link className="nav-text" to="#contact" smooth>
									Contact
								</Link>
							</th>
						</tr>
					</table>
				</div>
				
				<Header />
				<Body />
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App;