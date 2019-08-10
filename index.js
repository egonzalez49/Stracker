const express = require('express');
const routes = require('./routes');

//express server initialization
const app = express();

//parse the body of json requests
app.use(express.json({ extended: false }));

//api routes
app.use('/', routes);

//setup port and run the server
const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
