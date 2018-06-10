//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Users',(err,client)=> {
  if(err) {
     return console.log('Unable to connect to the database server')
  }
  console.log('Connected to MongoDB Server.');
  const db = client.db('Users');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b1a00170a9ded0fa10cdc58')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // },(err) => {
  //   console.log('Unable to fetch records');
  // });

  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5b1a00170a9ded0fa10cdc58')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Kritika Srivastava'
  }, {
    $inc: {
      age:1
    },
    $set: {
      name:'Isha Srivastava'
    }
  }, {
    returnOriginal:false
  }).then((results) => {
    console.log(results);
  });
  //client.close();
});
