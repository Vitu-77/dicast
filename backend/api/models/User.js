const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(databaseConnection) {
        super.init({
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            name: DataTypes.STRING,
            avatar_src: DataTypes.STRING,
            acess_level: DataTypes.INTEGER,
        }, {
            sequelize: databaseConnection
        });
    }
}

module.exports = User;