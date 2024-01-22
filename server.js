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

 app.post(("/login"), (req, res) => {
    const sql = `select * from customer where email='${req.body.email}' and password='${req.body.password}'`
    JDMX.query(sql, (err, data) => {
        if (err) {res.send(err); console.log(err)}
        else if (data[0]) {
            console.log('Success')
            res.send({username: data[0].first_name, id: data[0].id})
        } else {
            console.log('Not Found')
        }
    })
 })

 app.post(("/signup"), (req, res) => {

    const sql = `INSERT INTO customer (first_name, last_name, email, password) Values (?)`;
    const emailSelect = `Select * from customer where email='${req.body.email}'`
    JDMX.query(emailSelect, (err, data) => {
        if (data[0]) {
            console.log('existing')
            
        }
        else {
            const values = [
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                req.body.password
            ]

            
        
            JDMX.query(sql, [values], (err, data) => {
                if(err) return res.json(err);
                return res.json(data);
            })
        }
    })
    
    
 })

app.post("/addcartitem", (req, res) => {
    const sql = `INSERT INTO cart (product_id, customer_id) Values (?)`;
    const values = [
        req.body.product_id,
        req.body.customer_id
    ]

    JDMX.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
    

})

app.post("/removeCart", (req, res) => {
    const toRemove = req.query.id;
    const sql = `DELETE FROM cart WHERE cart_id='${toRemove}';`

    JDMX.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})

app.get("/cart", (req, res) => {
    const cartUser = req.query.user;
    // const sql = `SELECT * FROM cart where customer_id='${cartUser}'`
    const sql = `SELECT *
    from cart 
    left join products on cart.product_id=products.id
    where cart.customer_id='${cartUser}'
    order by products.id`

    JDMX.query(sql, (err, data) => {
        if (err) res.send(err)
        else res.send(data);
    })
})

// app.get("/carsearch", (req, res) => {
//     const carData = req.query.car;
//     // const sql = `SELECT * FROM products where id='${carData}'`
    

//     JDMX.query(sql, (err, data) => {
//         if (err) res.send(err)
//         else res.send(data);
//     })
// })

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