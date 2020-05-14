const Player = require("../models/player.model");

module.exports = {
	readAll: (req, res) => {
		Player.find({})
			.then(allPlayers => res.json(allPlayers))
			.catch(err => res.status(400).json(err))
	},
	readOne: (req, res) => {
		Player.findOne({ _id: req.params.id })
			.then(onePlayer => res.json(onePlayer))
			.catch(err => res.status(400).json(err))
	},
	create: (req, res) => {
		Player.create(req.body)
			.then(newlyCreatedPlayer => res.json(newlyCreatedPlayer))
			.catch(err => res.status(400).json(err))
	},
	update: (req, res) => {
		Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
			.then(updatedPlayer => res.json(updatedPlayer))
			.catch(err => res.status(400).json(err))
	},
	destroy: (req, res) => {
		Player.deleteOne({ _id: req.params.id })
			.then(deleteConfirmation => res.json(deleteConfirmation))
			.catch(err => res.status(400).json(err))
	}
}