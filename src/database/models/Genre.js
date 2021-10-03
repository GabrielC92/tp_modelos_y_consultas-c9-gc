module.exports = (sequelize,DataTypes) => {

    const alias = 'Genero'
    
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoincrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: DataTypes.INTEGER.UNSIGNED,
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
        underscored: true
    }

    const Genre = sequelize.define(alias,cols,config);
    return Genre;
}