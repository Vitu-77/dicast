const { Model, DataTypes } = require('sequelize');

class Podcast extends Model {
    static init(databaseConnection) {
        super.init({
            podcast_name: DataTypes.STRING,
            src: DataTypes.STRING(300),
        }, {
            sequelize: databaseConnection,
        });
    }
}

module.exports = Podcast;