/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StatisticData = require('./statistic-data');
var StatisticDataInt = (function (_super) {
    __extends(StatisticDataInt, _super);
    function StatisticDataInt() {
        this.value = 0;
        _super.call(this);
    }
    StatisticDataInt.prototype.getTypeId = function () {
        return StatisticDataInt.ID;
    };
    StatisticDataInt.prototype.reset = function () {
        this.value = 0;
    };
    StatisticDataInt.prototype.serialize = function (param1) {
        this.serializeAs_StatisticDataInt(param1);
    };
    StatisticDataInt.prototype.serializeAs_StatisticDataInt = function (param1) {
        _super.prototype.serializeAs_StatisticData.call(this, param1);
        param1.writeInt(this.value);
    };
    StatisticDataInt.prototype.deserialize = function (param1) {
        this.deserializeAs_StatisticDataInt(param1);
    };
    StatisticDataInt.prototype.deserializeAs_StatisticDataInt = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.value = param1.readInt();
    };
    StatisticDataInt.ID = 485;
    return StatisticDataInt;
})(StatisticData);
module.exports = StatisticDataInt;
