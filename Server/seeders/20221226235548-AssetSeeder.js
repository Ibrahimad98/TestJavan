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
    let data = [];
    const axios = require("axios");

    let { data: phoneData } = await axios.get("https://dummyjson.com/products?limit=10");

    phoneData.products.forEach((el, idx) => {
      data.push({
        id: el.id,
        name: el.title,
        price: el.price,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    // console.log(data);

    await queryInterface.bulkInsert("Assets", data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    //  * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Assets");
  },
};
