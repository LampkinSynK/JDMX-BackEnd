const express = require('express');
const app = express();
const JDMX = require('./database')

app.get("/api", (req, res) => {
    myQuery = `SELECT * FROM products`

    JDMX.query(myQuery, (err, data)=> {
        if (err) res.send(err) 
        else res.send(data);
    })
})

app.listen(5000, () => {
    console.log('Server listening on port 5000')
})