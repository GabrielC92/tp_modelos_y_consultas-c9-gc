const express = require('express');
const router = express.Router();
const {list,nueva,recommended,detail, search, add, create, edit, update, remove, destroy} = require('../controllers/moviesController');

router
    .get('/', list)
    .get('/new', nueva)
    .get('/recommended', recommended)
    .get('/detail/:id', detail)
    .get('/search', search)

    //Rutas exigidas para la creación del CRUD
    .get('/add', add)
    .post('/create', create)
    .get('/edit/:id', edit)
    .put('/update/:id', update)
    .get('/delete/:id', remove)
    .delete('/destroy/:id', destroy);

module.exports = router;