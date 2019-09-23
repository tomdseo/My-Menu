const mongoose = require('mongoose');
const MenuModel = mongoose.model('MenuDocument');

module.exports = {
    addDish: function (req, res) {
        MenuModel.create(req.body)
            .then(dish => {
                res.json(dish)
            })
            .catch(e => {
                const errors = [];

                for (key in e.errors) {
                    errors.push(e.errors[key].message);
                }
                res.json({
                    errors
                })
            })
    },

    getAllDish: function (req, res) {
        MenuModel.find()
            .then(dish => res.json(dish))
            .catch(err => res.json(err));
    },

    getDish: function (req, res) {
        MenuModel.findById(req.params.id)
            .then(dish => res.json(dish))
            .catch(err => res.json(err));
    },

    updateDish: function (req, res) {
        MenuModel.updateOne({
            _id: req.params.id
        }, {
            $set: {
                title: req.body.title,
                calories: req.body.calories,
                cost: req.body.cost,
                image: req.body.image,
            }
        }, {
            new: true,
            runValidators: true
        })
            .then(dish => {
                res.json({
                    dish
                })
            })
            .catch(e => {
                const errors = [];

                for (key in e.errors) {
                    errors.push(e.errors[key].message);
                }
                res.json({
                    errors
                })
            })
    },

    deleteDish: function (req, res) {
        MenuModel.deleteOne({
            _id: req.params.id
        })
            .then(() => {
                res.redirect('/dish')
            })
            .catch(err => res.json(err));
    },

}