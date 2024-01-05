const express = require('express');
const app = express();
const hbs = require('hbs');
const http = require('http');
const port= process.env.PORT || 5000 ;
const path = require('path');
const collection = require("./db/conn")
const socketIO = require('socket.io');


const server = http.createServer(app);
const io = socketIO(server);

//static path

const static_path = path.join(__dirname,"../public");
const tamplate_path = path.join(__dirname,"../tamplates/views");
const partials_path = path.join(__dirname,"../tamplates/partials");


app.use(express.json())
app.set('view engine','hbs');
app.set('view engine','ejs');
app.set('views',tamplate_path);
hbs.registerPartials(partials_path)
app.use(express.urlencoded({extended:true}))


app.use(express.static(static_path));

app.use(express.urlencoded({extended:true}))





app.get("/",(req , res)=>(
    res.render("index")
))

app.get("/login",(req , res)=>(
    res.render("login")
))

app.get("/cont",(req , res)=>(
    res.render("cont")
))


app.get("/create",(req , res)=>(
    res.render("create")
))

app.get("/createem",(req , res)=>(
    res.render("createem")
))

app.post("/game1",(req , res)=>{
    const room= req.body.room;
    res.render('game1',{room});
})




// io.on('connection', (socket) => {
//     socket.on('message', (msg) => {
//         io.emit('message', msg);
//     });
// });

io.on('connection', (socket) => {
    socket.on('join', (room) => {
      socket.join(room);
      io.to(room).emit('message', 'A new user has joined the chat');
    });
  
    socket.on('message', (data) => {
      io.to(data.room).emit('message', data.message);
    });
  
    socket.on('disconnect', () => {
      // Handle user disconnect
    });
  });



app.get("/game2",(req , res)=>(
    res.render("game2")
))

app.get("/join",(req , res)=>(
    res.render("join")
))

app.get("/joinem",(req , res)=>(
    res.render("joinem")
))
app.get("/option",(req , res)=>(
    res.render("option")
))

app.get("/rooms",(req , res)=>(
    res.render("rooms")
))

app.get("/roomsem",(req , res)=>(
    res.render("roomsem")
))

app.get("/register",(req , res)=>(
    res.render("register")
))

app.post("/register",async (req,res)=>{
    const data ={
        username:req.body.username,
        password:req.body.password,
    }

    await collection.insertMany([data])

    res.render("option")

})



app.post("/login",async (req,res)=>{
   try{
    const check=await collection.findOne({username:req.body.username})

    if (check.password===req.body.password){
        res.render("option")
    }
    else{
        res.send("wrong details")
    }

   }catch{

    res.send("wrong detials")

   }
})

io.on('connection', (socket) => {
    console.log('A user connected');
  

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });


  });


app.get("*",(req , res)=>(
    res.send("Error 404")
))





server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });