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
   const fs = require('fs')

   let data = JSON.parse(fs.readFileSync('./data/family.json','utf-8'))

   data.forEach(el => {
     delete el.id
     el.createdAt = el.updatedAt = new Date()
    });
     console.log(data)

   await queryInterface.bulkInsert('Families', data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Families');
  }
};
