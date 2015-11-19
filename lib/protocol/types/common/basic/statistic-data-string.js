/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StatisticData = require('./statistic-data');
var StatisticDataString = (function (_super) {
    __extends(StatisticDataString, _super);
    function StatisticDataString() {
        this.value = '';
        _super.call(this);
    }
    StatisticDataString.prototype.getTypeId = function () {
        return StatisticDataString.ID;
    };
    StatisticDataString.prototype.reset = function () {
        this.value = '';
    };
    StatisticDataString.prototype.serialize = function (param1) {
        this.serializeAs_StatisticDataString(param1);
    };
    StatisticDataString.prototype.serializeAs_StatisticDataString = function (param1) {
        _super.prototype.serializeAs_StatisticData.call(this, param1);
        param1.writeUTF(this.value);
    };
    StatisticDataString.prototype.deserialize = function (param1) {
        this.deserializeAs_StatisticDataString(param1);
    };
    StatisticDataString.prototype.deserializeAs_StatisticDataString = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.value = param1.readUTF();
    };
    StatisticDataString.ID = 487;
    return StatisticDataString;
})(StatisticData);
module.exports = StatisticDataString;
