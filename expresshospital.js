const express = require('express');
const app = express();

app.use(express.json());

const users = [{
    name: 'John',
    kidneys:[{
        healthy : true,
    }]    
}]

app.get('/', (req,res)=>{
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;

    let numberOfHealthyKidneys =0;

    johnKidneys.filter(f=>{
        if(f.healthy) return numberOfHealthyKidneys++;
    })

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({numberOfKidneys, numberOfUnhealthyKidneys,numberOfHealthyKidneys})
})

app.post('/', (req,res)=>{
    const {isHealthy } = req.body;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({msg:'done'})
})

app.put('/', (req,res)=>{
    users[0].kidneys.filter(f=>{
        return f.healthy = true
    })
    res.json({})
})

app.delete('/', (req,res)=>{
    users[0].kidneys.filter(f=>{
        if(f.healthy) return f.healthy = false
    })
    res.json({})
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})