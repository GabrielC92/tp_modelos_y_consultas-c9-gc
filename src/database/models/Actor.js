module.exports = (sequelize,DataTypes) => {

    const alias = 'Actor';

    const cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3,1),
            defaultValue: null
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
        }
    }

    const config = {
        tableName: 'actors',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        underscored: true
    }

    const Actor = sequelize.define(alias,cols,config);

    Actor.associate = models => {
        Actor.belongsTo(models.Pelicula, {
            as: 'movie',
            foreignKey: 'favorite_movie_id'
        });
        Actor.belongsToMany(models.Pelicula, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id'
        });
    }

    return Actor;
}