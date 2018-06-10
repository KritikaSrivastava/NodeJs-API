//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=> {
  if(err) {
     return console.log('Unable to connect to the database server')
  }
  console.log('Connected to MongoDB Server.');
  const db = client.db('Todos');

  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Kritika Srivastava'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndDelete({_id: new ObjectID('5b1a00170a9ded0fa10cdc58')}).then((result) => {
    console.log(result);
  });
  //client.close();
});
