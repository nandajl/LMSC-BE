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
    return queryInterface.bulkInsert('Courses', [
      {
        name: "Pemrograman Web",
        description: "Pembelajaran pemrograman web" ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pemrograman Web Dinamis",
        description: "Pembelajaran pemrograman web secara dinamis",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pemrograman Mobile",
        description: "Pembelajaran pemrograman mobile",
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
