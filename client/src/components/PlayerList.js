import React, {useState, useEffect} from "react";
import axios from "axios";
import SubNav from "./SubNav";

const PlayerList = props => {
	const [players, setPlayers] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		let mounted = true
		axios.get("http://localhost:8000/api/players")
			.then(response => {
				if (mounted) {
					console.log(response.data);
					setPlayers(response.data);
					setLoaded(true);
				}
			})
			.catch(err => console.log(err))
		return () => mounted = false;
	}, []);

	const deleteWithConfirm = (playerID, playerName) => {
		if (window.confirm(`Are you sure you want to remove ${playerName}?`)) {
			console.log("// delete functionality here")
			axios.delete("http://localhost:8000/api/players/" + playerID)
				.then(response => {
					console.log(response);
					setPlayers(players.filter(player => player._id !== playerID));
				})
				.catch(err => console.log(err))
		}
	}

	return(
		<>
			<SubNav subnavSwitch={"List"} />
			<table className="table table-striped table-bordered">
				<thead className="thead-light">
					<tr>
						<th scope="col">Player Name</th>
						<th scope="col">Preferred Position</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{loaded && players.map((p, i) => {
						return <tr key={i}>
							<td>{p.name}</td>
							<td>{p.position}</td>
							<td><button className="btn btn-outline-danger" onClick={e=>deleteWithConfirm(p._id, p.name)}>Delete</button></td>
						</tr>
					})}
				</tbody>
			</table>
		</>
	);
};

export default PlayerList;