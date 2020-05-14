import React from "react";
import Navbar from "../components/Navbar";

const Status = props => {
	return(
		<>
			<Navbar navSwitch={"Status"} />
			<div className="container mt-2 p-4 bg-white">
				{props.children}
			</div>
		</>
	);
};

export default Status;