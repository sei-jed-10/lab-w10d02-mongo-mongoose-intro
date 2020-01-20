/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/'+ 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect( mongoURI );


const manyVampires = [
  {
    name: 'redVampire',
    hair_color: 'red',
    eye_color: 'red',
    dob: new Date(1971, 2, 10, 6, 47),
    loves: ['biscuit'],
    location: 'KSA',
    gender: 'f',
    victims: 5
  },
  {
    name: 'blueVampire',
    hair_color: 'blue',
    eye_color: 'blue',
    dob: new Date(1971, 3, 11, 5, 47),
    loves: ['nutella'],
    location: 'Egypt',
    gender: 'f',
    victims: 6
  },
  {
    name: 'greenVampire',
    hair_color: 'green',
    eye_color: 'green',
    dob: new Date(1971, 4, 12, 2, 47),
    loves: ['marshmallows'],
    location: 'Korea',
    gender: 'm',
    victims: 2
  },
  {
    name: 'yellowVampire',
    hair_color: 'yellow',
    eye_color: 'yellow',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['chips'],
    location: 'Japan',
    gender: 'm',
    victims: 10
  },
];

//our data 
// Vampire.create(manyVampires, (error,vampire)=>{
//     if (error){
//         console.log(error);
//     }
//     else{
//         console.log(vampire);
//     }
//     db.close();
// })

//seed data
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err){ console.log(err)}
//     console.log("added provided vampire data", vampires)
//     mongoose.connection.close();
//   });

//find female
// Vampire.find({ gender: "f" }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//have greater than 500 victims
// Vampire.find({victims:{ $gt: 500 } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//have fewer than or equal to 150 victims
// Vampire.find({victims:{ $lte: 150 } }, (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   })

//have a victim count is not equal to 210234
// Vampire.find({victims:{ $ne: 210234 } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//have greater than 150 AND fewer than 500 victims
// Vampire.find({ $and:[{victims:{$gt:150}},{victims:{$lt:500}}] }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//have a key of 'title'
// Vampire.find({ title: { $exists: true } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//do not have a key of 'victims'
// Vampire.find({ victims: { $exists: false } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//have a title AND no victims
// Vampire.find({ $and:[{victims:{ $exists: false }},{title: { $exists: true }}] }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//have victims AND the victims they have are greater than 1000
// Vampire.find({ $and:[{victims:{ $exists: true }},{victims: { $gt:100 }}] }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({ $or:[{location:"New York, New York, US"},{location: "New Orleans, Louisiana, US"}] }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//love brooding or being tragic
// Vampire.find({ $or:[{loves:"brooding"},{loves: "being tragic"}] }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//have more than 1000 victims or love marshmallows
// Vampire.find({ $or:[{victims:{ $gt:1000 }},{loves: "marshmallows"}] }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//have red hair or green eyes
// Vampire.find({ $or:[{hair_color:"red"},{eye_color: "green"}] }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//love either frilly shirtsleeves or frilly collars
// Vampire.find({ $or:[{loves:"frilly shirtsleeves"},{loves: "frilly collars"}] }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//love brooding
// Vampire.find({loves:"brooding"}, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({ $or:[{loves:"appearing innocent"},{loves: "trickery"},{loves: "lurking in rotting mansions"},{loves: "R&B music"}] }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
// Vampire.find(
//   {$and:[
//   {loves:"fancy cloaks"},
//   { loves: { $nin: [ "top hats", "virgin blood" ] } }
// ]
// }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//love ribbons but do not have brown eyes
// Vampire.find(
//   {$and:[
//   {loves:"ribbons"},
//   { eye_color: { $nin: [ "brown"] } }
// ]
// }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//are not from Rome
// Vampire.find(
//   { location: { $nin: [ "Rome"] } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find(
//   { loves: { $nin: [ "fancy cloaks","frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"] } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//have not killed more than 200 people
// Vampire.find(
//   { victims: {$lt: 200} }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

/////////////
//replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.findOneAndUpdate({ name: 'Claudia' },{name: 'Eve'},{portrayed_by:'Tilda Swinton'}, (err, vampire) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log(vampire);
//   }
//   db.close()
// })

//replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.findOneAndUpdate({ gender: 'm' },{name: 'Guy Man'},{is_actually:'were-lizard'}, (err, vampire) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log(vampire);
//   }
//   db.close()
// })
///////

//Update 'Guy Man' to have a gender of 'f'
// Vampire.findOneAndUpdate({ name: 'Guy Man' },{gender: 'f'}, (err, vampire) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log(vampire);
//   }
//   db.close()
// })

//Update 'Eve' to have a gender of 'm'
// Vampire.findOneAndUpdate({ name: 'Eve' },{gender: 'm'}, (err, vampire) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log(vampire);
//   }
//   db.close()
// })

////////
//Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.findOneAndUpdate({ name: 'Guy Man' },{hates: ['clothes' , 'jobs']}, (err, vampire) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log(vampire);
//   }
//   db.close()
// })

//Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.findOneAndUpdate({ name: 'Guy Man' },{hates: ['alarm clocks' , 'jackalopes']}, (err, vampire) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log(vampire);
//   }
//   db.close()
// })
////////////////

//Rename 'Eve's' name field to 'moniker'
// Vampire.findOneAndUpdate({ name: 'Eve' },{name: 'moniker'}, (err, vampire) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log(vampire);
//   }
//   db.close()
// })

//Update all females so that the they are of gender "fems".
// Vampire.updateMany({ gender: 'f' },{gender: 'fems'}, (err, vampire) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log(vampire);
//   }
//   db.close()
// })

//Remove a single document wherein the hair_color is 'brown'
// Vampire.findOneAndRemove({ hair_color: 'brown' }, (err, vampire) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log('This is the deleted vampire:', vampire);
//   }
//   db.close()
// })

//remove all the vampires who have blue eyes from our database.
// Vampire.remove({ eye_color: 'blue' }, (err, vampire) => {
//     if (err){
//       console.log(err);
//     } else {
//       console.log('This is the deleted vampire:', vampire);
//     }
//     db.close()
//   })

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
  console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
