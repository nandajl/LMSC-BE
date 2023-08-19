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
    return queryInterface.bulkInsert('Classes', [
      {
        user_id: 2,
        course_id: 1,
        name: "Manajemen Informatika",
        description: "Pembelajaran pemrograman web secara dinamis",
        tahun_ajaran: "2022/2023",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        course_id: 2,
        name: "Manajemen Informatika",
        description: "Pembelajaran pemrograman web secara dinamis",
        tahun_ajaran: "2022/2023",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        course_id: 3,
        name: "Pemrograman Mobile",
        description: "Pembelajaran pemrograman mobile",
        tahun_ajaran: "2022/2023",
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
