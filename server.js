// function add(a,b){
//     return a+b;
// }

// var add =(a,b)=>a+b;

// var result = add(2,19); 
// console.log(result);

// (function(){
//     console.log('vishal singh');
// }

// )();  

// 2]

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi'+user.username+'!\n',()=>{
//     console.log('file is created');
// })



  //  3]
// const notes = require('./notes.js');
// var _=require('loadash');

// console.log('server file is available');

// // var age = notes.age;
// // console.log(age);
// // console.log('result is now'+result);

// var data=["person","person",1,2,1,2,'name','age','2'];
// var filter=_.uniq(data);
// console.log(filter);

// 5

// const objectToConvert={
//     name:"Alice",
//     age:25
// };

// const json =JSON.stringify(objectToConvert); // convert object to JSON string
// console.log(json);


// console.log(typeof json);


// 6] SERVER BANAO 

const express = require('express')
const app = express();
const db = require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());


const Person = require('./models1/person');
const MenuItem = require('./models1/MenuItem');


db.connectDB()

app.post('/person',async(req,res)=>{
 

  try{
    const data =req.body

   const newPerson=  new Person(data);
   const response=await newPerson.save();
   console.log('data saved');
   res.status(200).json(response);


  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});

  }
  
})

app.get('/person',async(req,res)=>{
 

  try{
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);


  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});

  }
  
})

app.post('/menu',async(req,res)=>{
 

  try{
    const data =req.body

   const newMenu=  new MenuItem(data);
   const response=await newMenu.save();
   console.log('data saved');
   res.status(200).json(response);


  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});

  }
  
})

app.get('/menu',async(req,res)=>{
 

  try{
    

   const data=  await MenuItem.find();
   
   console.log('data fetched');
   res.status(200).json(data);


  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});

  }
  
})


app.get('/person/:workType',async(req,res)=>{
  try{
    const workType=req.params.workType;
    if(workType=='chef' || workType=='manager' || workType=='waiter'){
       const response = await Person.find({work: workType});
       console.log('response fetched');
       res.status(200).json(response);

    }
    else{
      res.status(404).json({error:'Invalid work type'});
    }
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})


const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);




// app.get('/', function (req, res) {
//   res.send('Hello World .... how can help you ')
// })

// app.get('/chicken', function (req, res) {
//     res.send('Hello rudra how are you')
//   })


  
app.listen(4000,()=>{
  console.log('listening on port 4000');
})   






// const express = require('express');
// const connectDB = require('./db'); // Adjust path as per your project structure

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Define routes and middleware here...

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// lecture


// const express = require('express');
// const app = express();
// const db = require('./db');

// app.get('/', function (req, res) {
//   res.send('Hello World .... how can help you ')
// })

// app.listen(4000,()=>{
//   console.log('listening on port 4000');
// }) 

