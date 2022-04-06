const Thougth = require('../models/post');

async function index (req, res) {
try {

    const thoughts = await Thougth.all;
    res.status(200).json(thoughts)
    
} catch (err) {
    res.status(500).json({err})
}

}

async function show (req, res) {
    try {
        const thought = await Thougth.findById(req.params.id)
        res.status(200).json(thought)
        
    } catch (err) {
        res.status(404).json({err})
        
    }
}

async function create (req, res) {
    try {
        const thought = await Thougth.create(req.body);
        res.status(201).json(thought)
    } catch (err) {
        res.status(422).json({err})
    }
}


module.exports = {index, show, create}