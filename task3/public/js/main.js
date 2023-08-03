
let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log(document.getElementById('address').value)
    weatherFunction()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')
const longtitudeF = document.getElementById("longtitude")
const latitudeF = document.getElementById("latitude")

// async --> function return promise
let weatherFunction = async() =>{
    try{
        const address = document.getElementById('inputAddress').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText =""
            longtitudeF.innerText = ""
            latitudeF.innerText = ""
            forecastF.innerText =""
        }
        else {
            setTimeout(()=>{
                locationF.innerText = "Location : " +  data.location
            },1000)
            setTimeout(()=>{
                longtitudeF.innerText = "Longtitude : " +  data.longtitude
                latitudeF.innerText = "Latitude : " +  data.latitude
            },1500)
            setTimeout(()=>{
                forecastF.innerText = "Forecast : " +  data.forecast
            },2000)
            errorF.innerText =""
        }
    }
    catch(e){
        console.log(e)
    }
}

// 3 