
const MenuController = require('../controllers/menuController');


module.exports = function (app) {
    app.get('/api/menu', MenuController.getAllDish);

    app.get('/api/menu/:id', MenuController.getDish);

    app.post('/api/menu/create', MenuController.addDish);

    app.put('/api/menu/update/:id', MenuController.updateDish);

    app.delete('/api/menu/delete/:id', MenuController.deleteDish);
};