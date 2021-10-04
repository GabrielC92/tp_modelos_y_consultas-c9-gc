module.exports = (sequelize,DataTypes) => {

    const alias = 'Actor';

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoincrement: true
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
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        }
    }

    const config = {
        underscored: true
    }

    const Actor = sequelize.define(alias,cols,config);
    return Actor;
}