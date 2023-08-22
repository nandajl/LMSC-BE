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
        dosen_1_id: 2,
        dosen_2_id: 5,
        course_id: 1,
        name: "Manajemen Informatika",
        description: "Pembelajaran pemrograman web secara dinamis",
        tahun_ajaran: "2022/2023",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dosen_1_id: 2,
        dosen_2_id: 7,
        course_id: 2,
        name: "Manajemen Informatika",
        description: "Pembelajaran pemrograman web secara dinamis",
        tahun_ajaran: "2022/2023",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dosen_1_id: 3,
        dosen_2_id: 8,
        course_id: 3,
        name: "Manajemn Informatika",
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
