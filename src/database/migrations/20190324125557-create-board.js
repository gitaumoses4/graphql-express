
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Boards', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    owner: {
      type: Sequelize.INTEGER,
      onDelete: 'cascade',
      references: {
        model: 'Users',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Boards'),
};
