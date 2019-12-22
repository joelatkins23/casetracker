const express = require('express');
const app = express();
const MongoClient =require('mongodb').MongoClient;
const objectId= require('mongodb').ObjectID;
const assert = require('assert');
const path=require('path');
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/build')));
const url = 'mongodb://localhost:27017/casetracker';

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
MongoClient.connect(url,function(err, db){

  console.log("Connected");
  db.close();
})
// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


app.get('/saveuser', (req, res) => {
 var item={
   title:'main Tiltle',
   content:'main content',
   arthur:'main arther'
}

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  var db = client.db('casetracker');
  db.collection('Users').insertOne({
      'Employeeid': 4,
      'EmployeeName': "NewEmployee"
  });
  client.close();
 
});

});
app.get('/displayuser', (req, res) => {
  var resultArry=[];
  MongoClient.connect('mongodb://localhost:27017', function(err, client) {
   
  
  var db = client.db('casetracker');
 var curser= db.collection('contacts').find();
curser.forEach(function(doc,err){
assert.equal(null,err);
resultArry.push(doc);

},function(){
  client.close();
 res.send(resultArry)

})
    
   
  });


});
app.post('/deleteContact', (req, res) => {
  console.log(req.body);
  MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    var db = client.db('casetracker');
    db.collection("contacts").deleteOne({"_id":objectId(req.body.id)}, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
      
    });
    client.close();
   
  });

  res.send('/Contacts');
  
});
app.get('/api/secret', function(req, res) {
  res.send('The password is potato');
});
app.post('/newuser', function(req, res) {

  MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    var db = client.db('casetracker');
    db.collection('Users').insertOne({
        'userName': req.body.username,
        'email': req.body.email,
        'password': req.body.password
    });
    client.close();
    console.log("Data Entered")
  });


  res.redirect('/dashboard');

});
app.post('/login', function(req, res) {
  var resultArry=[];
console.log(req.body.password);
  var user="false";
  MongoClient.connect('mongodb://localhost:27017', function(err, client) {
   
  
  var db = client.db('casetracker');
 var curser= db.collection('Users').find();
curser.forEach(function(doc,err){
assert.equal(null,err);

if(req.body.email==doc.email && req.body.password==doc.password){
  user="true";
}

},function(){
  client.close();
  if(user=="true") { res.redirect('/dashboard'); }
  else{res.redirect('/login');}
  


})

  
   
  });


  // res.redirect('/');

});
app.post('/savecontact', function(req, res) {

  MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    var db = client.db('casetracker');
    db.collection('contacts').insertOne({
        'Salutation': req.body.Salutation,
        'firstName': req.body.first,
        'lastName': req.body.last,
        'companyName': req.body.companyName,
        'title': req.body.title,
        'tags': req.body.tags,
     
    });
    client.close();
    console.log("Data Entered")
  });


  res.redirect('/Contacts');

});
app.post('/editcontact', (req, res) => {
  console.log(req.body);
  MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    var item={
      Salutation:req.body.Salutation,
      firstName:req.body.first,
      lastName:req.body.last,
      companyName:req.body.companyName,
      title:req.body.title,
      tags:req.body.tags,
    }
    var db = client.db('casetracker');
    db.collection("contacts").updateOne({"_id":objectId(req.body.id)},{$set:item}, function(err, obj) {
      if (err) throw err;
      console.log("data is updated");
      
    });
    client.close();
    res.redirect('/Contacts');
  });

  
  
});
app.post('/saverequest', function(req, res) {

  MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    var db = client.db('casetracker');
    db.collection('MedicalRequestList').insertOne({
        'Salutation': req.body.Salutation,
        'firstName': req.body.first,
        'lastName': req.body.last,
        'companyName': req.body.companyName,
        'title': req.body.title,
        'tags': req.body.tags,
     
    });
    client.close();
    console.log("Data Entered")
  });


  res.redirect('/MedicalRequestList');

});
app.post('/editrequest', (req, res) => {
  console.log(req.body);
  MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    var item={
      Salutation:req.body.Salutation,
      firstName:req.body.first,
      lastName:req.body.last,
      companyName:req.body.companyName,
      title:req.body.title,
      tags:req.body.tags,
    }
    var db = client.db('casetracker');
    db.collection("MedicalRequestList").updateOne({"_id":objectId(req.body.id)},{$set:item}, function(err, obj) {
      if (err) throw err;
      console.log("data is updated");
      
    });
    client.close();
    res.redirect('/MedicalRequestList');
  });

  
  
});
app.post('/deleteRequest', (req, res) => {
  console.log(req.body);
  MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    var db = client.db('casetracker');
    db.collection("MedicalRequestList").deleteOne({"_id":objectId(req.body.id)}, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
      
    });
    client.close();
   
  });

  res.send('/MedicalRequestList');
  
});
app.get('/displayrequest', (req, res) => {
  var resultArry=[];
  MongoClient.connect('mongodb://localhost:27017', function(err, client) {
   
  
  var db = client.db('casetracker');
 var curser= db.collection('MedicalRequestList').find();
curser.forEach(function(doc,err){
assert.equal(null,err);
resultArry.push(doc);

},function(){
  client.close();
 res.send(resultArry)

})
    
   
  });


});