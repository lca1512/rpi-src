const express = require("express");
const app = express();
const port = 80;


app.all("*", (res, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`App listening on ${port}!`);
});