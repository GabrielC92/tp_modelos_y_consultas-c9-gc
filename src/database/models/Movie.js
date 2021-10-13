module.exports = (sequelize,DataTypes) => {

    const alias = 'Pelicula'

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        },
        genre_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        }
    }

    const config = {
        tableName: 'movies', // si la tabla no coincide con el plural del modelo, va esta configuración
        timestamps: true, // si no tiene timestamps va false
        underscored: true // si está escrito con guión bajo (_), ej.: updated_at 
    }

    const Movie = sequelize.define(alias,cols,config);

    Movie.associate = models => {
        Movie.belongsTo(models.Genre, {
            as: 'genero'
        });
        Movie.belongsToMany(models.Actor, {
            as: 'actores',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id'
        });
    }

    return Movie;
} 