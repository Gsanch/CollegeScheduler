const express = require ('express')
const bodyparser  = require ('body-pasrser');
const cors = require ('cors');
const { json } = require('express/lib/response');
const req = require('express/lib/resquest');
const res = require('express/lib/response');

const app = express ();
const port = 3000;
 
let tbl_fruits =[];

app.use(cors());

app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());
app.post('/gettbl_fruits',(req,res) => {

});
app.listen(port, () => console.log('hello our port is listening on port ${port}!'));
app.post('/fruit' , (req,res)=> {
    const fruit =req.body;

    console.log(fruit);
    tbl_fruits.push(fruit);

    res.send('fruits is added to the database');
});

app.get('/fruitslist',(req,res) =>{
    res.json(tbl_fruits);
});
app.post('/deletefriuts',(req,res)=>{

 for(let i =0;i<=tbl_fruits.length;i++){
      let fruit = tbl_fruits[i]
 if(fruit.id==req.body.id){
     tbl_fruits.splice(i,1);
 res.send('the fruit is deleted');    
 }     
 }   
});
app.post('/fruitsUpdate',(req,res)=>{
    const newFruit = req.body;
    console.log(newFruit);
    tbl_fruits.forEach(element =>{

        console.log(element);
        if(element.id===newFruit.id){
             element.price = newFruit.price;
        }
        res.send('the fruit is edited');
    });
});