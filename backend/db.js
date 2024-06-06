const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Sarthak1208:sarthak1208@cluster0.1tz3ft5.mongodb.net/Sample?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result)=>{
        if (err) console.log("---", err)
        else {

            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("Food-items");
            fetched_data.find({}).toArray( function(err,data){
                if(err) console.log(err);
                else console.log()
            })
        }
    });
}
module.exports = mongoDB;