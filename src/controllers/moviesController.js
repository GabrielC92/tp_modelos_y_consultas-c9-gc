const db = require('../database/models');
const {Op} = require('sequelize');

module.exports = {
    list: (req,res) => {
        db.Pelicula.findAll()
            .then(movies => {
                res.render('moviesList', {
                    movies
                })
            })
            .catch(error => console.log(error));
    },
    nueva: (req,res) => {
        db.Pelicula.findAll({
            order: [
                ['release_date','DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {
                    movies
                })
            })
            .catch(error => console.log(error));
    },
    recommended: (req,res) => {
        db.Pelicula.findAll({
            where: {
                rating: {
                    [Op.gte]: 8
                }
            },
            order: [
                ['rating','DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies', {
                    movies
                })
            })
            .catch(error => console.log(error));
    },
    detail: (req,res) => {
        db.Pelicula.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail',{
                    movie
                })
            })
            .catch(error => console.log(error));
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        // TODO   
    },
    create: function (req, res) {
        // TODO
    },
    edit: function(req, res) {
        // TODO
    },
    update: function (req,res) {
        // TODO
    },
    delete: function (req, res) {
        // TODO
    },
    destroy: function (req, res) {
        // TODO
    }
}