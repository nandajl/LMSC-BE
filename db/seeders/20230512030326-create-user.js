const authService = require('../../app/services/authServices');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
        username: 'dosen2',
        email: 'dosen2@mail.com',
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "ALDO ERIANDA",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "ANDRE FEBRIAN KASMAR",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "ARDI SYAWALDIPA",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "ARDIAN FIROSHA",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "CIPTO PRABOWO",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "DEFNI",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "DENI SATRIA",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "DWINY MEIDELFI",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "EDWAR ROSMAN",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "ERICK KURNIAWAN",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "ERVAN ASRI",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "FANNI SUKMA",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "FAZROL ROZI",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "FITRI ADONA",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "FITRI NOVA",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "HANRIYAWAN ADNAN MOODUTO",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "HARFEBI FRYONANDA",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "HIDRA AMNUR",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "HUMAIRA",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "INDRI RAHMAYUNI",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "MERI AZMI",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "RAEMON SYALJUMAIRI",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "RAHMAT HIDAYAT",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "RASYIDAH",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "RIKA IDMAYANTI",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "RITA AFYENNI",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "RONAL HADI",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "RONI PUTRA",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "TARUMA LEO WIJAYA",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "TAUFIK GUSMAN",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "TRI LESTARI",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "YANCE SONATHA",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "YULHERNIWATI",
        password: await authService.encryptPassword('qwerty'),
        role: 'Dosen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Nanda',
        nim: '2001092012',
        email: 'nanda@mail.com',
        password: await authService.encryptPassword('qwerty'),
        role: 'Mahasiswa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Julian',
        nim: '2001092013',
        email: 'julian@mail.com',
        password: await authService.encryptPassword('qwerty'),
        role: 'Mahasiswa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Lubis',
        nim: '2001092014',
        email: 'lubis@mail.com',
        password: await authService.encryptPassword('qwerty'),
        role: 'Mahasiswa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Azlan',
        nim: '2001092015',
        email: 'azlan@mail.com',
        password: await authService.encryptPassword('qwerty'),
        role: 'Mahasiswa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
