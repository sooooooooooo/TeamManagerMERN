import React from "react";
import {Link} from "@reach/router";

const SubNav = props => {
	const {subnavSwitch} = props;

	return(
		<p>
			<Link to="/players/list" className={subnavSwitch === "List" ? "font-weight-bold" : null}>List </Link>
			|
			<Link to="/players/addplayer" className={subnavSwitch === "Form" ? "font-weight-bold" : null}> Add Player</Link>
		</p>
	);
};

export default SubNav;