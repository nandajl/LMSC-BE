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
        dosen_id_1: 2,
        dosen_id_2: 5,
        course_id: 1,
        name: "MI 1A Praktek",
        description: "Pembelajaran pemrograman web statis",
        tahun_ajaran: "2022/2023",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dosen_id_1: 2,
        dosen_id_2: 7,
        course_id: 2,
        name: "MI 2A Praktek",
        description: "Pembelajaran pemrograman web secara dinamis",
        tahun_ajaran: "2022/2023",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dosen_id_1: 3,
        dosen_id_2: 8,
        course_id: 3,
        name: "MI 2A Praktek",
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
