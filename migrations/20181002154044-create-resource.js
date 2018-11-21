'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Resources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resourceName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      team: {
        allowNull: false,
        type: Sequelize.STRING
      },
      organization: {
        allowNull: false,
        type: Sequelize.STRING
      },
      resourceType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING
      },
      techStack: {
        allowNull: false,
        type: Sequelize.STRING
      },
      billRate: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      capitalizationRatio: {
        type: Sequelize.DECIMAL(10,2)
      },
      budgetedFlag: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      loadHoursFlag: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      activeFlag: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      startDateActive: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endDateActive: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Resources');
  }
};