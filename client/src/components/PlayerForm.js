import React, {useState, useEffect, useRef} from "react";
import SubNav from "./SubNav";
import axios from "axios";
import {navigate} from "@reach/router";

const PlayerForm = props => {
	const firstRender = useRef(true);
	const [name, setName] = useState("");
	const [position, setPosition] = useState("");
	const [disable, setDisable] = useState(true);
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		};
		setDisable(formValidation());
	}, [name]);

	const formValidation = () => {
		if (name === "") {
			setErrors(["Name field is required."]);
			return true;
		} else if(name.length > 0 && name.length < 2){
			setErrors(["Name must be at least 2 characters in length."]);
			return true;
		} else {
			setErrors([]);
			return false;
		}
	};

	const onSubmitHandler = e => {
		e.preventDefault();
		axios.post("http://localhost:8000/api/players", {name, position})
			.then(response => {
				console.log(response.data);
				navigate("/players/list");
			})
			.catch(err => {
				const errorResponse = err.response.data.errors;
				const errArr = [];
				for(const key of Object.keys(errorResponse)){
					errArr.push(errorResponse[key].message)
				}
				setErrors(errArr);
			})
	}

	return(
		<>
			<SubNav subnavSwitch={"Form"} />
			<form onSubmit={onSubmitHandler}>
				<div className="form-group row">
					<label htmlFor="inputName" className="col-sm-3 col-form-label">Player Name:</label>
					<div className="col-sm-9">
						<input type="text" className="form-control" id="inputName" value={name} onChange={e=>setName(e.target.value)} />
						{errors.map((err, i) => <p className="text-danger" key={i}>{err}</p>)}
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="inputPosition" className="col-sm-3 col-form-label">Preferred Position:</label>
					<div className="col-sm-9">
						<input type="text" className="form-control" id="inputPosition" value={position} onChange={e=>setPosition(e.target.value)} />
					</div>
				</div>
				<button type="submit" className="btn btn-primary" disabled={disable}>ADD</button>
			</form>
		</>
	);
};

export default PlayerForm;