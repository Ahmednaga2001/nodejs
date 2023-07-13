const fs = require("fs")
const obj = {
    fname : "ahmed",
    lname : "naga",
    age : 22,
    city : "mansoura"
}

// change obj to Json
const objJson = JSON.stringify(obj)

// store in file
fs.writeFileSync("data.json",objJson)

// read file (json)
const DataJson = fs.readFileSync("data.json")

// Convert to obj
const personDataobj = JSON.parse(DataJson)

// Update data to ( adel ahmed , 22 , cairo)
personDataobj.fname="ahmed"
personDataobj.lname="adel"
personDataobj.age="20"
personDataobj.city="cairo"

// convert obj to Json
const personDataJson = JSON.stringify(personDataobj)

// store in file (writeFileSync)
fs.writeFileSync("data.json",personDataJson)

