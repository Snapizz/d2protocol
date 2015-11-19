/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StatisticData = require('./statistic-data');
var StatisticDataBoolean = (function (_super) {
    __extends(StatisticDataBoolean, _super);
    function StatisticDataBoolean() {
        this.value = false;
        _super.call(this);
    }
    StatisticDataBoolean.prototype.getTypeId = function () {
        return StatisticDataBoolean.ID;
    };
    StatisticDataBoolean.prototype.reset = function () {
        this.value = false;
    };
    StatisticDataBoolean.prototype.serialize = function (param1) {
        this.serializeAs_StatisticDataBoolean(param1);
    };
    StatisticDataBoolean.prototype.serializeAs_StatisticDataBoolean = function (param1) {
        _super.prototype.serializeAs_StatisticData.call(this, param1);
        param1.writeBoolean(this.value);
    };
    StatisticDataBoolean.prototype.deserialize = function (param1) {
        this.deserializeAs_StatisticDataBoolean(param1);
    };
    StatisticDataBoolean.prototype.deserializeAs_StatisticDataBoolean = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.value = param1.readBoolean();
    };
    StatisticDataBoolean.ID = 482;
    return StatisticDataBoolean;
})(StatisticData);
module.exports = StatisticDataBoolean;
