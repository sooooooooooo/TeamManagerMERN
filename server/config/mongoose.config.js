const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/team_manager_mern_db", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", () => console.log("connected to mongodb!"));