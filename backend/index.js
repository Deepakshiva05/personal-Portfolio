const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const UserInfo =require('./models/ReactSchema');
require("dotenv").config();

const mongo_url=process.env.mongo_url;



app.use(express.json());
app.use(cors());

mongoose.connect(mongo_url, { useNewUrlParser: true});

app.post('/contact', async(req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const message=req.body.message;
    console.log(name,email,message)
    const formData  =  new UserInfo(
        {
            name: name,
            email: email,
            message:message
        }
    )
    try{
     
        await formData.save();
        res.send("inserted data..")

    } catch(err){
        console.log(err)
    }
  });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});