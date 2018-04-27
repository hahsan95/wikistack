const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const index = require('./views/index.js');
const {main} = require('./views/index.js');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send(main(''));
})

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
