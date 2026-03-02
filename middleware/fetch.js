const express = require("express")
const app = express()

async function fetchData(req, res, next) {
    try {
        const base = req.body.currency1;   
        const target = req.body.currency2;

        if (!base || !target) {
            return res.status(400).json({ error: "Base and target required" });
        }

        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/310599a91976670c2383247f/latest/${base}`
        );

        if (!response.ok) {
            return res.status(500).json({ error: "API request failed" });

        }

        const exchangeData = await response.json();

        const rate = exchangeData.conversion_rates[target];

        req.exchangeRate = {
            base,
            target,
            rate
        };

        next();

    } catch (error) {
        next(error);
    }
}


module.exports = { fetchData }