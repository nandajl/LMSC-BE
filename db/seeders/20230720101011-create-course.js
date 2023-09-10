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
        name: "Logika Informatika",
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pancasila",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Agama",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Algoritma Pemrograman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pengantar Teknologi Informasi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sistem Informasi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Praktek Aplikasi Komputer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Praktik Mulitmedia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Praktik Perakitan Dan Instalasi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kewarganegaraan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sistem Operasi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jaringan Komputer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Matematika Diskrit",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sistem Basis Data",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Algoritma Pemrograman II",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Praktik Pemrograman Web Dasar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Praktik Desain Interaksi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bahasa Inggris I",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kewirausahaan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Probabilitas Dan Statistika",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Struktur Data",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Analisis Dan Perancangan Sistem Informasi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Interaksi Manusia Komputer	",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sistem Informasi Geografis",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pemrograman Berorientasi Objek",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Praktik Perograman Web Dinamis",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Praktik Basis Data Lanjut",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bahasa Inggris II",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "E-government",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Komputasi Awan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pemrograman Mobile",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rekayasa Perangkat Lunak",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Keamanan Sistem Informasi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Praktik Pemrograman Web Framework",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Praktik Pemrograman Desktop",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Praktik Pemrograman Berorientasi Objek II",
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
