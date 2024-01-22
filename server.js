const express = require('express');
const app = express();
const JDMX = require('./database')
const cors = require('cors')

const corsOptions ={
    origin:'*', 
    credentials:true,     
    optionSuccessStatus:200,
}

 app.use(express.json())
 app.use(cors(corsOptions))

 app.post(("/signup"), (req, res) => {

    firstName = req.body.first_name;
    lastName = req.body.last_name;
    email = req.body.email;
    password = req.body.password;
    const sql = `INSERT INTO customer ('first_name', 'last_name', 'email', 'password') Values ('${firstName}', '${lastName}', '${email}', '${password}')`;
    
    // const values = [
    //     req.body.first_name,
    //     req.body.last_name,
    //     req.body.email,
    //     req.body.password
    // ]

    JDMX.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
 })

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