const express = require("express")
const app = express()

const { valutaConvert} = require("./middleware/add-remove")



app.set("view-engine", "ejs")


app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post ("/", (req,res) => {
    console.log("renderd /")
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000"

    )
})