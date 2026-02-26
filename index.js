const express = require("express");
const app = express();

const { fetchData } = require("./middleware/fetch");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", fetchData, (req, res) => {

    const amount1 = req.body.amount1;
    const base = req.body.currency1;
    const target = req.body.currency2;
    const rate = data.conversion_rates[target];


    // const { amount1 } = req.body;
    // const { base, target, rate } = req.exchangeData;

    const convertedAmount = amount1 * rate;
    console.log(amount1, rate)
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});