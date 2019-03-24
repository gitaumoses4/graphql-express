export default {
  Query: {
    getUser: (parent, { username }, { models }) => models.User.findOne(
      { where: { username } },
    ),
    allUsers: (parent, args, { models }) => models.User.findAll(),
  },

  Mutation: {
    createUser: (parent, { username }, { models }) => models.User.create({ username }),
    updateUser: (parent, { username, newUsername }, { models }) => models.User.update(
      { username: newUsername },
      { where: { username } },
    ),
    deleteUser: (parent, { username }, { models }) => models.User.destroy({ where: { username } }),
  },
};
