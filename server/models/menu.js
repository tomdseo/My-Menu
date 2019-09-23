const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/menu_DB')

const MenuSchema = new mongoose.Schema({ //!!Schema in Mongoose is a structure for each Document
    title: {type: String, required: true},
    image: {type: String},
    cost: {type: Number, required: true, min: [1, "Minimum of 1 Dollar for All Dish"]},
    calories: {type: Number, required: true, min: [1, "Minimum of 1 Calorie for All Dish"]},
    //LATER: Put in Recipe (as an array of another Schema, so people can follow steps)
}, {timestamps: true }); //.....................adds "createdAt" and "updatedAt" properties

const MenuModel = mongoose.model('MenuDocument', MenuSchema);