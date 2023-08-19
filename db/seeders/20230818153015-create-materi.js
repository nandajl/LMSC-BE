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
    return queryInterface.bulkInsert('Lessons', [
      {
        class_id : 1,
        title: "MVC",
        body: "Materi dasar tentang Model View Controller di framework laravel" ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id : 1,
        title: "Pengelolaan aset pada laravel",
        body: "Materi dasar tentang pengelolaan aset di framework laravel" ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id : 1,
        title: "Blade Template Engine",
        body: "Materi dasar tentang merancang layout di framework laravel" ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id : 1,
        title: "Laravel UI",
        body: "Materi dasar tentang Laravel UI di framework laravel" ,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id : 1,
        title: "Collection",
        body: "Materi dasar tentang Collection di framework laravel" ,
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
