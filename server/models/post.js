const db = require('../db_config/init')


module.exports = class Thought {
    constructor(data){
        this.id = data.id;
        this.pseudonym = data.pseudonym;
        this.title = data.title;
        this.thought = data.thought;
    }

static get all(){
return new Promise (async (resolve, reject) => {
try {
const result = await db.query('SELECT * FROM ')

    
} catch (err) {
    reject('Book not found');
    
}

})    
}

static findById(id){
    return new Promise (async (resolve, reject) => {
try {
    let thoughtData = await db.query( 'SELECT * FROM    ')
} catch (error) {
    
}


    })
}




};




