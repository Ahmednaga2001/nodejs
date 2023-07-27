const request = require("request")

const url = `https://api.weatherapi.com/v1/current.json?key=d94781cba6904bcaa5e210921232407&q=egypt`

const data = (callback)=>{
    request({ url, json: true }, (error, response) => {
      if (error) {
       callback("cant" , undefined)
      } 
      else if (response.body.error) {
        callback(response.body.error.message,undefined)
      } 
      else {
        callback(undefined,{
           temp : response.body.current.temp_c,
          text :  response.body.current.condition.text
        })
      }
      
      
    })

}


module.exports = data
