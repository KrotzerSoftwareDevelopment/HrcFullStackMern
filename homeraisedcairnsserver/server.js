import express from 'express';
import data from './data';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import puppyRoute from './routes/puppyRoute';
import config from './config';


const app = express();
// mongoose.connect(mongodbUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }).catch((error) => console.log(error.reason));

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://homeraisedcairns:YOURDFSbRBLp1CQ8@homeraisedcluster.bpphp.mongodb.net/homeraisedcluster?retryWrites=true&w=majority", {
  //Commenting this section out makes the login work and puppies
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb://localhost/homeraisedcairnsserver";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
// client.connect(err => {
//   const collection = client.db("test").collection("devices");

//   // perform actions on the collection object
//   client.close();
// });



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://homeraisedcairns:Funtime247@homeraisedcluster.bpphp.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



// const mongodbUrl = config.MONGODB_URL;
// mongoose.connect(mongodbUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }).catch((error) => console.log(error.reason));


// const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoute);
app.use('api/puppies', puppyRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/puppies/:id", (req, res) => {
    const puppyId = req.params.id;
    const puppy = data.puppies.find(x=>x._id === puppyId );
    if (puppy)
        res.send(puppy);
    else
     res.status(404).send({ msg: "Even Puppy Pages Can Have Accidents!"})
});

app.get("/api/puppies", (req, res) => {
    res.send(data.puppies);
});

app.get("/api/reservations/:id", (req, res) => {
    const reservationId = req.params.id;
    const reservation = data.reservations.find(x=>x._id === reservationId );
    if (reservation)
        res.send(reservation);
    else
     res.status(404).send({ msg: "Even Puppy Pages Can Have Accidents!"})
});

app.get("/api/reservations", (req, res) => {
    res.send(data.reservations);
});
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../homeraisedcairns/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../homeraisedcairns/build/index.html`));
});




app.listen(config.PORT, () => {
    console.log('Server started at http://localhost:5000');
  });