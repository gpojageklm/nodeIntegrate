const express=require('express');
const path=require('path');

const app=express();

const port=process.env.port||3001;

app.use(express.static(__dirname+'/dist/nodeAngApp'));

app.get('/*',(req,res)=>res.render('index'));

//const server=http.createServer(app);
app.listen(port,()=>console.log("running.."));