const express = require("express")
const app = express()

const valutaConvert = (req,res) => {
    const valuta1 = {valuta1, valuta2, amount1, amount2,} = req.body

    try {
        const sum = amount1 + amount2
        console.log(sum)
    }
    catch {
        console.log("catch")
    }
}
module.exports = {valutaConvert}