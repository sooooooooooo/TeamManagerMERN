import React, {useState, useEffect} from "react";
import axios from "axios";
import SubNavForGame from "./SubNavForGame";

const Game = props => {
	const {num} = props;
	const [players, setPlayers] = useState([]);
	const [reload, setReload] = useState(false);
	let whichgame = "game" + num;

	useEffect(() => {
		axios.get("http://localhost:8000/api/players")
			.then(response => {
				setPlayers(response.data);
				setReload(!reload);
			})
			.catch(err => console.log(err))
	}, [reload]);

	const onClickHandler = (event, player, newStatus) => {
		event.preventDefault();
		player[whichgame] = newStatus;
		console.log(player);
		axios.put("http://localhost:8000/api/players/" + player._id, player)
			.then(response => {
				console.log(response.data);
				setReload(!reload);
			})
			.catch(err => console.log(err))
	}

	return(
		<>
			<SubNavForGame subnavforgameSwitch={num} />
			<table className="table table-striped table-bordered">
				<thead className="thead-light">
					<tr>
						<th scope="col">Player Name</th>
						<th scope="col">Action Status</th>
					</tr>
				</thead>
				<tbody>
					{players.map((p, i) => {
						return <tr key={i}>
							<td>{p.name}</td>
							<td>
								<button onClick={e=>onClickHandler(e, p, "Playing")} className={p[whichgame] === "Playing" ? "btn btn-outline-dark mx-2 btn-success text-white" : "btn btn-outline-dark mx-2"}>Playing</button>
								<button onClick={e=>onClickHandler(e, p, "Not Playing")} className={p[whichgame] === "Not Playing" ? "btn btn-outline-dark mx-2 btn-danger text-white" : "btn btn-outline-dark mx-2"}>Not Playing</button>
								<button onClick={e=>onClickHandler(e, p, "Undecided")} className={p[whichgame] === "Undecided" ? "btn btn-outline-dark mx-2 btn-warning text-white" : "btn btn-outline-dark mx-2"}>Undecided</button>
							</td>
						</tr>
					})}
				</tbody>
			</table>
		</>
	);
};

export default Game;