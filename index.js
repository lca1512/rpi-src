const express = require("express");
const app = express();
const port = 5001;


app.all("*", (req, res) => {
	res.send("Hello World! - QB");
});

app.listen(port, () => {
	console.log(`App listening on ${port}!`);
});