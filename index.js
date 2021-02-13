const express = require('express');
const app = express ();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//import routes
const authRouter = require('./routes/auth');
const postRoute = require('./routes/post');  
dotenv.config();

//connect to DB
process.env.DB_CONNECT, {useNewUrIParser: true, useUnifiedTopology:true }, 
mongoose.connect('mongodb+srv://devs:rhino11@cluster0.evdk0.mongodb.net/avs?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},   
() => console.log('connect to DB')
 );

//Middleare
app.use(express.json());



//routes middleare          

// app.use('/api/user', authRoute); 
app.use('/api/posts', postRoute);
    
app.listen(3000, () => console.log('server up and running'));
