const express = require("express");
const app = express();

const { fetchData } = require("./middleware/fetch");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", {
        result: null
    });
});

app.post("/", fetchData, (req, res) => {

    const { amount1 } = req.body;
    const { base, target, rate } = req.exchangeRate;

    const convertedAmount = amount1 * rate;

    res.render("index", {
        result: {
            amount1,
            base,
            target,
            convertedAmount
        }
    });
});

app.use(express.static("public"))

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});