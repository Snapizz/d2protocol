var StatisticDataShort = module.exports = function() {
    this.value = 0;

    return this;
};

require('util').inherits(StatisticDataShort, require('./statistic-data.js'));

StatisticDataShort.prototype.serialize = function(output) {
    this.serializeAs_StatisticDataShort(output);
};

StatisticDataShort.prototype.deserialize = function(input) {
    this.deserializeAs_StatisticDataShort(input);
};

StatisticDataShort.prototype.serializeAs_StatisticDataShort = function(param1) {
    this.serializeAs_StatisticData(param1);
    param1.writeShort(this.value);
};

StatisticDataShort.prototype.deserializeAs_StatisticDataShort = function(param1) {
    this.deserializeAs_StatisticData(param1);
    this.value = param1.readShort();
};

StatisticDataShort.prototype.getTypeId = function() {
    return 488;
};

StatisticDataShort.prototype.getClassName = function() {
    return 'StatisticDataShort';
};

module.exports.id = 488;