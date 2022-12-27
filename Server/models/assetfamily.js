'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AssetFamily extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AssetFamily.init({
    AssetId: DataTypes.INTEGER,
    FamilyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AssetFamily',
  });
  return AssetFamily;
};