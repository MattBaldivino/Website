import { Nav, Navbar, NavLink} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
	return (
		<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
			<Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
			<Navbar.Collapse id="navbarScroll">
				<Nav className="ms-auto container-fluid">
					<b class="navbar-text">Matthew Baldivino</b>
				</Nav>
				<Nav className="me-auto">
					
					<NavLink eventKey="1" as={Link} to="/">About</NavLink>
					<NavLink eventKey="2" as={Link} to="/">Skills</NavLink>
					<NavLink eventKey="3" as={Link} to="/">Contact</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavigationBar;