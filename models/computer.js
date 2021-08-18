module.exports = function(sequelize, DataTypes) {
    let Computer = sequelize.define("Computer", {
        make: DataTypes.STRING,
        model: DataTypes.STRING,
    })
    return Computer;
}