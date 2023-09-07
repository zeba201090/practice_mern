const mongoose = require ('mongoose')


const db_conn = mongoose.connect( 'mongodb+srv://mzeba16:rodo@cluster1.fsviguc.mongodb.net/' , 
{ useNewUrlParser: true, useUnifiedTopology: true }).then(() =>
 {
    console.log('Connected to MongoDB')
}).catch(err => 
    {   
    console.log(err)
    })

module.exports = db_conn;
