// import
const express = require('express');
const path = require('path');

// init

const app = express();

// static
app.use(express.static(`${__dirname}/../public/`));

// middleware

app.use(express.json());

// endpoints

// listen
const port = 3000;

app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('uh oh');
    throw err;
  } else {
    // eslint-disable-next-line no-console
    console.log(`listening at http://localhost:${port}`);
  }
});
