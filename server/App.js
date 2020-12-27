const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const App = express();
App.use(cors());
App.use(bodyParser.json());

App.get('/user', (req, res) => {
    
    res.json({ message:"welcome " + req.query.name  });
});
App.post('/user', (req, res) => {
    console.log('body :', req.body);
    res.json({ name:req.body.name,message:"welcome" });
});
App.listen(3000,()=>{
   console.log('server running on port 3000'); 
});