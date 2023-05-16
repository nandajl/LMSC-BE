const authService = require('../../app/services/authService');
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
    return queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        email: 'admin@mail.com',
        password: await authService.encryptPassword('qwerty'),
        role: 'Perusahaan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'nanda',
        email: 'nanda@mail.com',
        password: await authService.encryptPassword('qwerty'),
        role: 'Pegawai',
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
