'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Note.belongsTo(models.User,{foreignKey:'userId'})
    }
  }
  Note.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: {
      type: DataTypes.INTEGER,
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
      references:{
        model:'users',
        key:'id'
      }}

  }, {
    sequelize,
    modelName: 'Note',
    tableName:'notes'
  });
  return Note;
};