const express = require('express')
const app = express()
const port = 8080

app.get('/status', function(req, res) {
	res.send('Status 0')
});

app.post('/doSomething', function(req, res) {
	// do something here through the API
	res.send(0);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
