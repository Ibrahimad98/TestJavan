"use strict";
const { Model, STRING } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Family extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Family.belongsToMany(models.Asset, { through: models.AssetFamily });
    }
  }
  Family.init(
    {
      name: DataTypes.STRING,
      ParentId: DataTypes.INTEGER,
      gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Family",
    }
  );
  return Family;
};
