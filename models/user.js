'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Stock,{foreignKey:'userId'})
      User.hasMany(models.Note,{foreignKey:'userId'})
    }
  }User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName:'users'
  });
  return User
};