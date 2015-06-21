var StatisticDataBoolean = function() {
    this.value = false;
};

require('util').inherits(StatisticDataBoolean, require('./statistic-data.js'));

module.exports = function() {
    return new StatisticDataBoolean();
};

StatisticDataBoolean.prototype.serialize = function(output) {
    this.serializeAs_StatisticDataBoolean(output);
};

StatisticDataBoolean.prototype.deserialize = function(input) {
    this.deserializeAs_StatisticDataBoolean(input);
};

StatisticDataBoolean.prototype.serializeAs_StatisticDataBoolean = function(param1) {
    this.serializeAs_StatisticData(param1);
    param1.writeBoolean(this.value);
};

StatisticDataBoolean.prototype.deserializeAs_StatisticDataBoolean = function(param1) {
    this.deserializeAs_StatisticData(param1);
    this.value = param1.readBoolean();
};

StatisticDataBoolean.prototype.getTypeId = function() {
    return 482;
};

StatisticDataBoolean.prototype.getClassName = function() {
    return 'StatisticDataBoolean';
};

module.exports.id = 482;
module.exports.StatisticDataBoolean = StatisticDataBoolean;