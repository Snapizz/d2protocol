var StatisticDataString = module.exports = function() {
    this.value = "";

    return this;
};

require('util').inherits(StatisticDataString, require('./statistic-data.js'));

StatisticDataString.prototype.serialize = function(output) {
    this.serializeAs_StatisticDataString(output);
};

StatisticDataString.prototype.deserialize = function(input) {
    this.deserializeAs_StatisticDataString(input);
};

StatisticDataString.prototype.serializeAs_StatisticDataString = function(param1) {
    this.serializeAs_StatisticData(param1);
    param1.writeUTF(this.value);
};

StatisticDataString.prototype.deserializeAs_StatisticDataString = function(param1) {
    this.deserializeAs_StatisticData(param1);
    this.value = param1.readUTF();
};

StatisticDataString.prototype.getTypeId = function() {
    return 487;
};

StatisticDataString.prototype.getClassName = function() {
    return 'StatisticDataString';
};

module.exports.id = 487;