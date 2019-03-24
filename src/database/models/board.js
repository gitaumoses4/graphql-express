
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    name: DataTypes.STRING,
  }, {});
  Board.associate = (models) => {
    Board.hasMany(models.Suggestion, {
      foreignKey: 'boardId',
    });

    Board.belongsTo(models.User, {
      foreignKey: 'owner',
    });
  };
  return Board;
};
