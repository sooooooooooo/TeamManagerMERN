import React from "react";
import Navbar from "../components/Navbar";

const Main = props => {
	return(
		<>
			<Navbar navSwitch={"Players"} />
			<div className="container mt-2 p-4 bg-white">
				{props.children}
			</div>
		</>
	);
};

export default Main;