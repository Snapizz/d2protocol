/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StatisticData = require('./statistic-data');
var StatisticDataByte = (function (_super) {
    __extends(StatisticDataByte, _super);
    function StatisticDataByte() {
        this.value = 0;
        _super.call(this);
    }
    StatisticDataByte.prototype.getTypeId = function () {
        return StatisticDataByte.ID;
    };
    StatisticDataByte.prototype.reset = function () {
        this.value = 0;
    };
    StatisticDataByte.prototype.serialize = function (param1) {
        this.serializeAs_StatisticDataByte(param1);
    };
    StatisticDataByte.prototype.serializeAs_StatisticDataByte = function (param1) {
        _super.prototype.serializeAs_StatisticData.call(this, param1);
        param1.writeByte(this.value);
    };
    StatisticDataByte.prototype.deserialize = function (param1) {
        this.deserializeAs_StatisticDataByte(param1);
    };
    StatisticDataByte.prototype.deserializeAs_StatisticDataByte = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.value = param1.readByte();
    };
    StatisticDataByte.ID = 486;
    return StatisticDataByte;
})(StatisticData);
module.exports = StatisticDataByte;
