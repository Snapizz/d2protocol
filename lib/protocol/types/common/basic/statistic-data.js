/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var StatisticData = (function () {
    function StatisticData() {
        this.actionId = 0;
    }
    StatisticData.prototype.getTypeId = function () {
        return StatisticData.ID;
    };
    StatisticData.prototype.reset = function () {
        this.actionId = 0;
    };
    StatisticData.prototype.serialize = function (param1) {
        this.serializeAs_StatisticData(param1);
    };
    StatisticData.prototype.serializeAs_StatisticData = function (param1) {
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeVarShort(this.actionId);
    };
    StatisticData.prototype.deserialize = function (param1) {
        this.deserializeAs_StatisticData(param1);
    };
    StatisticData.prototype.deserializeAs_StatisticData = function (param1) {
        this.actionId = param1.readVarUhShort();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of StatisticData.actionId.');
        }
    };
    StatisticData.ID = 484;
    return StatisticData;
})();
module.exports = StatisticData;
