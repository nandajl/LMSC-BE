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
    return queryInterface.bulkInsert('FeedbackCats', [
      {
        name: 'User Interface(UI) & User Experience(UX)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fungsionalitas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kinerja',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Konten',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dukungan Pengguna',
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
