const express = require("express"),
app = express(),
cors = require("cors");

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

require("./server/routes/player.routes")(app);

app.listen(8000, () => console.log("server is listening on port 8000!"))