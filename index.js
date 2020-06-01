const express = require("express");
const app = express();
const port = 80;


app.all("*", (req, res) => {
	res.send("Hey Everybody!");
});

app.listen(port, () => {
	console.log(`App listening on ${port}!`);
});