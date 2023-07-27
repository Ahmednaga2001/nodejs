const gecode = require("./gecodeData.js")
const forecast = require("./forecastData")
const request = require("request")
const country = process.argv[2];
gecode(country, (error, data) => {
  console.log("EROOR : "  , error);
  console.log("DATA : "  , data);
  if(data){
    forecast(data.longtitude,data.latitude,(error,data)=>{
      console.log("EROOR : ", error);
      console.log("DATA : " , data )
    })
  }
  else{
    console.log("data have errors")
  }
});




// gecode ( country , (error , data) => {
//     console.log("ERROR : " , error)
//     console.log("DATA  : " , data)

//     if (data) {
//         forecast( data.latitude , data.longtitude , (error , data) => {
//             console.log("ERROR : " , error)
//             console.log("DATA  : " , data)
//        } )
//     } else {
//         console.log("Data Entered have An Error")
//     }
   
// } ) 

// process.argv :    str
// yargs  :  { }