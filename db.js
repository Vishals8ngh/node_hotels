// db.js
const User = require('./models/user'); // Adjust path as per your project structure

const mongoose = require('mongoose');

// Replace 'mongodb://localhost:27017/mydatabase' with your MongoDB connection string
const mongoURL = 'mongodb://localhost:27017/mydatabase';

exports.connectDB = async () => {
    try {
        await mongoose.connect(mongoURL, {
            dbName:"lodu",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
        process.exit(1); // Exit process with failure
    }
};

// module.exports = connectDB;



// const mongoose = require('mongoose');
//  // define the mongoDb connection URL
//  const mongoURL = 'mongodb://localhost:27017/hotels';


//  // Set up MongoDb connection

//   mongoose.connect(mongoURL,{
//     useNewUrlParser: true,
//          useUnifiedTopology: true
//   });

//  const db=mongoose.connection;


//  // define event listners for database connection

//  db.on ('connected',()=>{
//     console.log('Connected to MongoDB server');
//  });

//  db.on ('error',(err)=>{
//     console.log('MongoDB connection error:',err);
//  });

//  db.on ('disconnected',()=>{
//     console.log('Connected to MongoDB server');
//  });

//  modules.exports=db;

