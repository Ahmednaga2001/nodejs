const geocode = require("./tools/geocode")
const forecast = require("./tools/forecast")
const path = require("path")

const express = require("express")
const app = express()
app.set("view engine" , "hbs")
const port = 3000

const viewsDir = path.join(__dirname,"../temp1/views")
app.set("views" , viewsDir)

const hbs = require("hbs");

const partialspath = path.join(__dirname, "../temp1/partials");
hbs.registerPartials(partialspath);

const publicDir = path.join(__dirname,"../public")
app.use(express.static(publicDir))


app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send({error : "you must provide address"})
    }
    else{
        geocode(req.query.address , (error ,data)=>{
            if(error){
                return res.send({error})
            }
            else{
                forecast(data.longtitude,data.latitude , (error,forecastData)=>{
                    if(error){
                       return res.send({error})
                    }
                    else{
                        res.send({
                            location : req.query.address,
                            latitude : data.latitude ,
                            longtitude : data.longtitude,
                            forecast : forecastData
                        })
                    }
                })
            }
        })
    }

})
app.get ('/' , (req,res) => {
    res.render('index' , {
        title : "HOME",
        desc : "This is home page"
    })
})

app.get("/check",(req,res)=>{
    res.render("check",{
        title:"check"
    })
})

app.get("*",(req,res)=>{
    res.send({
        error : "404 page not found"
    })
})
app.listen(port , ()=>{
    console.log(`listen on port ${port}`)
})
