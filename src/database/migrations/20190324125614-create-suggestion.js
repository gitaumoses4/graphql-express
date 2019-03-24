
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Suggestions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    text: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    boardId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Boards',
      },
    },
    creatorId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
      },
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Suggestions'),
};
