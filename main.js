const { request } = require('express');
const express = require('express'); //Requiring in express
const app = express(); //creating an expresss application

app.use(express.urlencoded({extended: false}))

const getWeather = (req, res, next) =>{

req.visitorWeather = false;
next()
}

//Routes to send or recieve data



//get request to get data from the server. We are getting the root directory of the server.
app.get('/', getWeather, (req, res)=>{ 

    


    res.send(`
    
    <h1>What colour is the sky on a clear day?</h1>

    <form method='POST' action='/result'> 

    <input type = 'text' name = 'colour'></input>
    <button type = 'submit'>Button</button>
    
    <p>${req.visitorWeather ? 'It is raining' : 'it is not raining'}
    
    `)
    //what the server sends when the request is recieved
})

app.get('/about', (req, res)=>{

    res.send('Welcome to our About Page')
})


app.get('/result', (req, res)=>{
    res.send('This was not a post request!')
})



app.post('/result', (req, res)=>{

    if (req.body.colour.trim().toUpperCase() === 'BLUE'){
        res.send('Yes, that is correct')
    }
    else{
        res.send('That aint right');
    }
   

})





//listen on this port
app.listen(3000);

