import React from "react";
import {Link} from "@reach/router";

const Navbar = props => {
	const {navSwitch} = props;

	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className={"nav-item " + (navSwitch === "Players" ? "active" : null)}>
						<Link to="/players" className="nav-link">Manage Players</Link>
					</li>
					<li className={"nav-item " + (navSwitch === "Status" ? "active" : null)}>
						<Link to="/status" className="nav-link">Manage Player Status</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;