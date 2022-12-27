"use strict";

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
    let data = [
      { FamilyId: 2, AssetId: 3 },
      { FamilyId: 2, AssetId: 7 },
      { FamilyId: 6, AssetId: 1 },
      { FamilyId: 7, AssetId: 2 },
      { FamilyId: 3, AssetId: 5 },
      { FamilyId: 8, AssetId: 3 },
      { FamilyId: 9, AssetId: 5 },
      { FamilyId: 9, AssetId: 2 },
      { FamilyId: 4, AssetId: 3 },
      { FamilyId: 10, AssetId: 7 },
      { FamilyId: 5, AssetId: 5 },
      { FamilyId: 10, AssetId: 2 },
    ];

    data.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });

    // console.log(data);
    // await queryInterface.bulkInsert("AssetFamilies", data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("AssetFamilies");
  },
};
