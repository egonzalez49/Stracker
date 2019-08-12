const express = require('express');
const routes = require('./routes');

//express server initialization
const app = express();

//parse the body of json requests
app.use(express.json({ extended: false }));

//api routes
app.use('/', routes);

//express behaving in production (send unknown routes to client build)
if (process.env.NODE_ENV === 'production') {
  //serve up production assets like main.js or .css
  app.use(express.static('client/build'));
  //unknown route? return html
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//setup port and run the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
