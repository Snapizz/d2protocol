/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StatisticData = require('./statistic-data');
var StatisticDataShort = (function (_super) {
    __extends(StatisticDataShort, _super);
    function StatisticDataShort() {
        this.value = 0;
        _super.call(this);
    }
    StatisticDataShort.prototype.getTypeId = function () {
        return StatisticDataShort.ID;
    };
    StatisticDataShort.prototype.reset = function () {
        this.value = 0;
    };
    StatisticDataShort.prototype.serialize = function (param1) {
        this.serializeAs_StatisticDataShort(param1);
    };
    StatisticDataShort.prototype.serializeAs_StatisticDataShort = function (param1) {
        _super.prototype.serializeAs_StatisticData.call(this, param1);
        param1.writeShort(this.value);
    };
    StatisticDataShort.prototype.deserialize = function (param1) {
        this.deserializeAs_StatisticDataShort(param1);
    };
    StatisticDataShort.prototype.deserializeAs_StatisticDataShort = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.value = param1.readShort();
    };
    StatisticDataShort.ID = 488;
    return StatisticDataShort;
})(StatisticData);
module.exports = StatisticDataShort;
