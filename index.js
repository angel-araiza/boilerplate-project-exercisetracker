const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
app.use(bodyParser.urlencoded({extended: false}));

let userDatabase = [];
let idCounter = 0;
let database = [];


app.post('/api/users', function(req,res){
  const username = req.body.username;
  let _id = idCounter++;

  userDatabase.push({ username: username, _id: _id })
  //user schema
  res.json({ username: username, _id: _id })
});

app.get('api/users', function(req,res){
  res.json(userDatabse);
})

app.post('api/users/:_id/exercises', function(req, res){
  let id = req.body._id;
  let description = req.body.description;
  let duration = req.body.description;
  let date = req.body.description;

  if (id === userDatabase._id){
    if (date){
      database.push({
      username: username,
      count: count,
      _id: _id,
      log: [{
        description: description,
        duration: duration,
        date: date
      }]
    });
    //log schema
    res.json({
      username: username,
      count: count,
      _id: _id,
      log: [{
        description: description,
        duration: duration,
        date: date
      }]
    });  
    } else {
      let today = new Date();
      let currentDate = today.toDateString();
      database.push({
        username: username,
        count: count,
        _id: _id,
        log: [{
          description: description,
          duration: duration,
          date: currentDate
        }]
      });
      //log schema
      res.json({
        username: username,
        count: count,
        _id: _id,
        log: [{
          description: description,
          duration: duration,
          date: currentDate
        }]
      });  
    }
  } else{
    res.json({error: "Not able to find the user with that ID in the database."})
  }
})

app.get('api/user/:_id/logs', function(req,res){
  let id = req.params._id
  if (id === )
})

//exercise schema
res.json({ 
  username: username, 
  description: description, 
  duration: duration, 
  date: date,
  _id: _id
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
