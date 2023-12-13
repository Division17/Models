
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
const jokes = [
    {
      id:1,
      title:"Head",
      content:"This is content 1",
    },
    {
        id:2,
        title:"neck",
        content:"This is content 2",
      },
      {
        id:3,
        title:"shoulder",
        content:"This is content 3",
      },
      {
        id:4,
        title:"chest",
        content:"This is content 4",
      },
      {
        id:5,
        title:"legs",
        content:"This is content 5",
      },
    ]

// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })

app.get("/api/jokes",(req,res)=>{
 res.send(jokes)
}) 


// app.get("/register",(req,res)=>{
//     res.send(`<h3> Please Register</h3>`)
//    }) 
   
app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})