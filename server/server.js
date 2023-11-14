import express  from "express";

const app = express();

const PORT = 4000
app.get("/", (res, req)=>{
    res.json({message: "my test"}
    )
})

app.listen(PORT, () => {
    console.log(`app running on port : ${PORT}`)
})