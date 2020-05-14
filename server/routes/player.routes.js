const playerCtrl = require("../controllers/player.controller");

module.exports = app => {
	app.get("/api/players", playerCtrl.readAll);
	app.get("/api/players/:id", playerCtrl.readOne);
	app.post("/api/players", playerCtrl.create);
	app.put("/api/players/:id", playerCtrl.update);
	app.delete("/api/players/:id", playerCtrl.destroy);
}