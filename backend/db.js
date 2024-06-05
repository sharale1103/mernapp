const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Sarthak1208:sarthak1208@cluster0.1tz3ft5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB =() =>{
  mongoose.connect(mongoURI,()=>{
    console.log(' Successfully Connected to MongoDB');
  })
};
module.exports= mongoDB;