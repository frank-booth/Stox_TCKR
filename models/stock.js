'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Stock.belongsTo(models.User,{foreignKey:'userId'})
    }
  }
  Stock.init({
    symbol: DataTypes.STRING,
    costBasis: DataTypes.DECIMAL,
    quantity: DataTypes.DECIMAL,
    userId:{
      type: DataTypes.INTEGER,
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
      references:{
        model:'users',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Stock',
    tableName:'stocks'
  });
  return Stock;
};