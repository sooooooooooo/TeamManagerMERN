const mongoose = require("mongoose");

const PlaySchema = new mongoose.Schema({
	name: {
		type: String, 
		required: [true, "Name field is required."],
		minlength: [2, "Name must be at least 2 characters in length."]
	},
	position: {
		type: String
	},
	game1: {
		type: String,
		default: "Undecided"
	},
	game2: {
		type: String,
		default: "Undecided"
	},
	game3: {
		type: String,
		default: "Undecided"
	}
}, {timestamps: true});

const Player = module.exports = mongoose.model("Player", PlaySchema);