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
      { FamilyId: 2, AssetId: "Samsung Universe 9" },
      { FamilyId: 2, AssetId: "Samsung Galaxy Book" },
      { FamilyId: 6, AssetId: "iPhone9" },
      { FamilyId: 7, AssetId: "iPhone X" },
      { FamilyId: 3, AssetId: "Huawei P30" },
      { FamilyId: 8, AssetId: "Samsung Universe 9" },
      { FamilyId: 9, AssetId: "Huawei P30" },
      { FamilyId: 9, AssetId: "iPhone X" },
      { FamilyId: 4, AssetId: "Samsung Universe 9" },
      { FamilyId: 10, AssetId: "Samsung Galaxy Book" },
      { FamilyId: 5, AssetId: "Huawei P30" },
      { FamilyId: 10, AssetId: "iPhone X" },
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
