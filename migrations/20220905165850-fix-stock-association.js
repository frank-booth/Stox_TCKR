'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.changeColumn("stocks", "userId", {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: {
        model: "users",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn("stocks", "userId", { null: true });
  },
};
