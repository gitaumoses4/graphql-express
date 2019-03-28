
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    paranoid: false
  });
  Link.associate = function (models) {
    // associations can be defined here
  };
  return Link;
};
