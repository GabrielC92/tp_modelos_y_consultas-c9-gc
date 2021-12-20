module.exports = (sequelize,DataTypes) => {

    const alias = 'Genero';
    
    const cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    }

    const config = {
        tableName: 'genres',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        underscored: true
    }

    const Genre = sequelize.define(alias,cols,config);

    Genre.associate = models => {
        Genre.hasMany(models.Pelicula, {
            as: 'peliculas',
            foreignKey: 'genre_id'
        });
    }

    return Genre;
}