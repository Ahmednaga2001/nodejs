const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient
const connectionUrl = "mongodb://127.0.0.1:27017"
const dbname = "task6"
mongoClient.connect(connectionUrl,(error,res)=>{
    if(error){
        console.log("error has occured")
    }
    console.log("All Perfect")
    const db = res.db(dbname)
    db.collection("users").insertOne({name:"ahmed" , age : 30 , city : "mansoura"},(error,data)=>{
        if(error){
            console.log("unable to insertone")
        }
        else{
            console.log(data.insertedId)
        }
    })
    db.collection("users").insertOne({name:"shady" , age : 40 , city : "mansoura"},(error,data)=>{
        if(error){
            console.log("unable to insertone")
        }
        else{
            console.log(data.insertedId)
        }
    })
    db.collection("users").insertMany([
        {
            name : "mohamed",
            age : 25,
            city : "alex"
        },
        {
            name : "hamdy",
            age : 25,
            city : "alex"
        },
        {
            name : "naga",
            age : 25,
            city : "alex"
        },
        {
            name : "aya",
            age : 25,
            city : "alex"
        },
        {
            name : "said",
            age : 25,
            city : "alex"
        },
        {
            name : "mai",
            age : 20,
            city : "alex"
        },
        {
            name : "alaa",
            age : 21,
            city : "alex"
        },
        {
            name : "emad",
            age : 22,
            city : "alex"
        },
        {
            name : "asel",
            age : 23,
            city : "alex"
        },
        {
            name : "mohsen",
            age : 24,
            city : "alex"
        },
    ],(error,data)=>{
        if(error){
            console.log("unable to insertmany")
        }
        else{
            console.log(data.insertedCount)
        }
    })

    db.collection("users").find({age:25}).toArray((error,users)=>{
        if(error){
            console.log("unable to get users that match 25")
        }
        else{
            console.log(users)
        }
    })
    db.collection("users").find({age:25}).limit(3).toArray((error,users)=>{
        if(error){
            console.log("unable to get 3 users that match 25")
        }
        else{
            console.log(users)
        }
    })

     db.collection("users").updateOne({_id:mongodb.ObjectId("64da93e3851ebafc8710c272")},{
        $set : {name : "manal"}
    }).then((data)=> console.log("successfully update")).catch((error)=> console.log(error))
     db.collection("users").updateOne({_id:mongodb.ObjectId("64da93e3851ebafc8710c273")},{
        $set : {name : "marwa"}
    }).then((data)=> console.log("successfully update")).catch((error)=> console.log(error))
     db.collection("users").updateOne({_id:mongodb.ObjectId("64da93e3851ebafc8710c274")},{
        $set : {name : "hala"}
    }).then((data)=> console.log("successfully update")).catch((error)=> console.log(error))
     db.collection("users").updateOne({_id:mongodb.ObjectId("64da93e3851ebafc8710c275")},{
        $set : {name : "medhat"}
    }).then((data)=> console.log("successfully update")).catch((error)=> console.log(error))
    
    
    db.collection("users").updateOne({_id:mongodb.ObjectId("64da84db4f249e2262637fae")},{
        $inc : {age:20}
    }).then((data)=> console.log("successfully update")).catch((error)=> console.log(error))
    

db.collection("users").updateMany({},{
    $inc:{age:10}
}).then((data)=>console.log("updateMany success")).catch((error)=>console.log(error))

db.collection("users").deleteOne({_id:mongodb.ObjectId("64da93e3851ebafc8710c272")}).then((data)=>console.log("delted user success")).catch((error)=>console.log(error))

db.collection("users").deleteMany({age:35}).then((data)=>console.log(data.deletedCount)).catch((error)=>console.log(error))
})
