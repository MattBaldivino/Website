import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import NavigationBar from "./NavigationBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
	return(
		<div className="App">
			<Router>
				<NavigationBar />
				<Switch>
					{/* NOTE: replace this with smoothscrolling navbar!! */}
                			<Route path='/' component={Footer}/>
                			<Route path='/' component={Footer}/>
           		 	</Switch>
			</Router>
			<Header />
			<Body />
			
			<Footer />
		</div>
	)
}

export default App;