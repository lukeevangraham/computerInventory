module.exports = function(sequelize, DataTypes) {
    let Computer = sequelize.define("Computer", {
        name: DataTypes.STRING,
        make: DataTypes.STRING,
        model: DataTypes.STRING,
        bits: DataTypes.INTEGER,
        cpu: DataTypes.STRING,
        ram: DataTypes.STRING,
        operating_system: DataTypes.STRING,
        ms_office: DataTypes.STRING,
        adobe: DataTypes.STRING,
        note: DataTypes.STRING
    })
    return Computer;
}