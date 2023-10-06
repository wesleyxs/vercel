const app = require("express")();

app.listen(8081, () => {
    console.log("server running");
})

app.get("/vercel", (req, res) => {
    const dynamicDate = new Date(); 
    res.send("date: " + dynamicDate); 
})

