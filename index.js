const { Pool } = require('pg');
const express = require("express")
const app = express()

app.use( express.json() )

// Create a new pool for connecting to the database
const pool = new Pool({
  user: 'huor',
  host: 'db',
  database: 'test_db',
  password: 'huor1234',
  port: 5432,
});

app.get("/" , (req , res)=>{
    res.json({
        message:"Ran"
    })
})

app.post("/create" , async (req , res)=>{
    try {
        await pool.query(` create table test_tb( id serial primary key , name varchar(100) ) `)
        res.send({
            message:"Created" 
        })
    } catch (error) {
        res.send( error )
    }
})

app.post("/insert" , async ( req, res )=>{

        try{
            await pool.query("insert into test_tb(name) values('Huor') ")
            res.send({
                message:"Created" 
            })
        }catch(error){
            res.send( error )
        }

})

app.get("/get" , async ( req , res )=>{
    try {
        const datas = await pool.query("select * from test_tb")
        res.send( datas )
    } catch (error) {
        res.send( error )
    }
})

app.listen( 3000 , ()=>{
    console.log( "run on port 3000" )
} )





