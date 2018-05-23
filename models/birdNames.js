module.exports = function(sequelize, DataTypes) {
    var birdName = sequelize.define("birdName", {
        birdName: DataTypes.STRING
    }, {
        timestamps: false
    });
    return birdName;
};