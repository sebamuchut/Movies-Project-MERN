const mongoose = require('mongoose');


const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.DB_CONNECT, {
            keepAlive: true, 
            keepAliveInitialDelay: 300000
        });

        console.log('database is connected')
    }catch(error){
        console.log(error);
        throw new Error('Error trying to initiate database')
    }
}

module.exports = {
    dbConnection
}