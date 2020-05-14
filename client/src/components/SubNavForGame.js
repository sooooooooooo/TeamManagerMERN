import React from "react";
import {Link} from "@reach/router";

const SubNavForGame = props => {
	const {subnavforgameSwitch} = props;

	return(
		<>
			<h3>Player Status - Game {subnavforgameSwitch}</h3>
			<p>
				<Link to="/status/game/1" className={subnavforgameSwitch === "1" ? "font-weight-bold" : null}>Game 1 </Link>
				|
				<Link to="/status/game/2" className={subnavforgameSwitch === "2" ? "font-weight-bold" : null}> Game 2 </Link>
				|
				<Link to="/status/game/3" className={subnavforgameSwitch === "3" ? "font-weight-bold" : null}> Game 3</Link>
			</p>
		</>
	);
};

export default SubNavForGame;