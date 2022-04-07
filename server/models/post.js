const db = require('../db_config/init')


module.exports = class Thought {
    constructor(data){
        this.id = data.id;
        this.pseudonym = data.pseudonym;
        this.title = data.title;
        this.thought = data.thought;
    }


    static create(title, pseudonym, thought) {
        return new Promise (async (resolve, reject) => {
            try {
                let formData = db.query(`INSERT INTO post title, pseudonym, thought VALUES ($1 $2 $3) RETURNING *;`, [title, pseudonym, thought])
                let newThought = new Thought(formData.rows[0])
                resolve(newThought)
            } catch (err) {
                reject('Thought could not be created')
            }
        })
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




