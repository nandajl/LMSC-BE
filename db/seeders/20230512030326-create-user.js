const authService = require('../../app/services/authServices');
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
        role: 'Admin',
        photo: 'https://res.cloudinary.com/doqt4lhc6/image/upload/v1665022425/samples/animals/kitten-playing.gif',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'dosen',
        email: 'dosen@mail.com',
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'nanda',
        nim: '123456789',
        email: 'nanda@mail.com',
        password: await authService.encryptPassword('qwerty'),
        role: 'Mahasiswa',
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
