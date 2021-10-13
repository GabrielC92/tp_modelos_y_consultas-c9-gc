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
    },
    search : (req,res) => {
        db.Pelicula.findAll({
            where: {
                [Op.or]: [{
                    title: {
                        [Op.substring]: req.query.keywords
                    }
                }]
            }
        })
            .then(movies => res.render('moviesResult',{
                title: 'Resultado de la búsqueda',
                movies,
                busqueda: req.query.keywords.trim()
            }))
            .catch(error => console.log(error));
    },
    //Aqui inicia el CRUD
    add: (req, res) => res.render('moviesAdd'),
    create: (req, res) => {
        const {title,rating,awards,release_date,length} = req.body;
        db.Pelicula.create({
            title: title.trim(),
            rating,
            awards,
            release_date,
            length
        })
            .then(movie => {
                console.log(movie);
                res.redirect('/movies')
            })
            .catch(error => console.log(error));
    },
    edit: (req, res) => {
        db.Pelicula.findByPk(req.params.id)
            .then(Movie => res.render('moviesEdit',{
                Movie
            }))
            .catch(error => console.log(error));
    },
    update: (req, res) => {
        db.Pelicula.update({
            ...req.body
        },
        {
            where: {
                id: req.params.id
            }
        })
            .then(() => res.redirect('/movies'))
            .catch(error => console.log(error));
    },
    remove: (req, res) => {
        db.Pelicula.findByPk(req.params.id)
            .then(Movie => res.render('moviesDelete',{
                Movie
            }))
            .catch(error => console.log(error));
    },
    destroy: (req, res) => {
        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => res.redirect('/movies'))
            .catch(error => console.log(error));
    }
}