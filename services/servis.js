const { getDb } = require('../configs/BD');
const { ObjectId } = require('mongodb');



module.exports = {
    findToArray: async () => { 
        let db = await getDb(); 
        let char = await db.collection('VEB_2').find().toArray(); 
        return char; 
    },
    

    findOne: async (id) => {
        let db = await getDb();
        let char = await db.collection('VEB_2').findOne({_id: new ObjectId(id)});
        return char;
      },
      
    insertOne: (query) => {
        let db = getDb();
        let char = db.collection('VEB_2').insertOne(query);
        return char;
    }
}


