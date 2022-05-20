
import drinks from "./public/dataset.js";
import express from "express";
import ejs from "ejs";
import bodyparser from "body-parser";
const app = express();

app.use(express.static("public"));
app.set('view engine','ejs'); 
app.engine('ejs', ejs.__express);
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/menu",(req,res)=>{
    res.render("menu");
});

app.get("/suggestion",(req,res)=>{
    res.render("suggestion");
});

app.get("/result",(req,res)=>{
    res.render("result");
})

app.post("/result",(req,res)=>{
const type = req.body.type;
const strongness = req.body.strongness;
const sweetness =req.body.sweetness;
const flavor = req.body.flavor;
let result="-1",i;

for(i=0;i<9;i++)
{
    const qtype = drinks.drinks[i].type;
    const qstrongness = drinks.drinks[i].strongness;
    const qsweetness = drinks.drinks[i].sweetness;
    const qflavor = drinks.drinks[i].flavor;   
    
    if(qtype==type && qsweetness==sweetness && qstrongness==strongness && qflavor==flavor)
    {result = drinks.drinks[i].name;break;}
}

let message,name;
if(result=="-1")
{    
    let num;
    if(type=='hotdrink')
    num = Math.floor(Math.random()*4);     
    else 
    num = Math.floor(Math.random()*4)+5;   
    name = drinks.drinks[num].name;
}
else name = result;
message = name+" will taste best to you.";
res.render("result",{message:message});
})

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/products",(req,res)=>{
    res.render("products");
});

app.get("/signup",(req,res)=>{
    res.render("signup");
});

app.listen(3000,(req,res)=>{
    console.log("Server running");
});

