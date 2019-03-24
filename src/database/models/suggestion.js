
module.exports = (sequelize, DataTypes) => {
  const Suggestion = sequelize.define('Suggestion', {
    text: DataTypes.STRING,
  }, {});
  Suggestion.associate = (models) => {
    Suggestion.belongsTo(models.Board, {
      foreignKey: 'boardId',
    });

    Suggestion.belongsTo(models.User, {
      foreignKey: 'creatorId',
    });
  };
  return Suggestion;
};
