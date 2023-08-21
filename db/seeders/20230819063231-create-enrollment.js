'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Enrollments', [
      {
        user_id: 37,
        class_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 38,
        class_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 39,
        class_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
