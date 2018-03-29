'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tests', [{
      testdata: 'testing. testing. testing',
      firstName: 'DeepBlue',
      createAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tests', null, {});
  }
};
