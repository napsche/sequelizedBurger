module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      text: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    });
    return Burger;
  };