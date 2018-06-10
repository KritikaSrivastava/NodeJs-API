//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=> {
  if(err) {
     return console.log('Unable to connect to the database server')
  }
  console.log('Connected to MongoDB Server.');
  const db = client.db('Users');
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b14ebcfb22eabd4fbf55d4c')})
  //   .toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch todos');
  // });

  // const db = client.db('TodoApp');
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // },(err) => {
  //   console.log('Unable to fetch todos');
  // });

  db.collection('Users').find({name:'Rohan Srivastava'}).toArray().then((docs) => {
    console.log(docs);
  },(err) => {
    console.log('Unable to fetch Users');
  });
  //client.close();
});
