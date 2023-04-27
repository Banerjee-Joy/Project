const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('./database/Users.js')
const cookieParser = require('cookie-parser')
const { spawn } = require('child_process'); 
require('dotenv').config()
const app = express()

const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = 'i247yr8efgewfgqo4yhrfsegh'

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173'
}))

mongoose.connect(process.env.MONGO_URL)

app.post('/predict', (req,res) =>{
    const {lat,long,room,min_night,nor,revpm,availability,norltm,city} = req.body
    const price = 0
    try{
        const pythonProcess = spawn('python', ['script.py', lat, long, room, min_night, nor, revpm, availability, norltm, city, price])

        pythonProcess.stdout.on('data', (data) => {
                const y_pred = data.toString()
                res.json(y_pred) 
        });

        pythonProcess.stderr.on('data', (data) => {
              console.error(`stderr: ${data}`)
        });
        
        pythonProcess.on('close', (code) => {
            console.log(`Python script exited with code ${code}`)
        });
 
    }catch(e){
        res.status(422).json(e)
    }


})

app.post('/register', async (req,res) => {
    const {name,email,password} = req.body
    try{
        const userDoc = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password,bcryptSalt),
    })
    res.json(userDoc)
    }catch(e){
        res.status(422).json(e)
    }
    
})

app.post('/login', async (req,res) => {
    const {email,password} = req.body
    const userDoc = await User.findOne({email})
    if(userDoc){
        const passOk = bcrypt.compareSync(password,userDoc.password)
        if(passOk){
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err,token) => {
                if(err) throw err
                res.cookie('token','').json(userDoc)
            })
            
        } else{
            res.status(422).json('password not ok')
        }

    }
})

app.get('/profile', (req,res) => {
    mongoose.connect(process.env.MONGO_URL)
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, jwtSecret, {}, async (err,userData) => {
            if(err) throw err
            const {name,email,_id} = await User.findById(userData.id)
            res.json({name,email,_id})
        })
    } else{
        res.json(null)
    }
})


app.listen(4000)