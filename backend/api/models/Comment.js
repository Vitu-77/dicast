const { Model, DataTypes } = require('sequelize');

class Comment extends Model {
    static init(databaseConnection){
        super.init({
            comment: DataTypes.TEXT,
            author_name: DataTypes.STRING,
            author_avatar: DataTypes.STRING,
        }, {
            sequelize: databaseConnection
        });
    }

    static associate(models){
        this.belongsTo(models.Podcast, { foreignKey: 'podcast_id', as: 'podcast_comments' });
    }
}

module.exports = Comment;