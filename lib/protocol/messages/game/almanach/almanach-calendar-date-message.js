/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AlmanachCalendarDateMessage = (function (_super) {
    __extends(AlmanachCalendarDateMessage, _super);
    function AlmanachCalendarDateMessage() {
        this.date = 0;
        _super.call(this);
    }
    AlmanachCalendarDateMessage.prototype.getMessageId = function () {
        return AlmanachCalendarDateMessage.ID;
    };
    AlmanachCalendarDateMessage.prototype.reset = function () {
        this.date = 0;
    };
    AlmanachCalendarDateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AlmanachCalendarDateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AlmanachCalendarDateMessage.prototype.serialize = function (param1) {
        this.serializeAs_AlmanachCalendarDateMessage(param1);
    };
    AlmanachCalendarDateMessage.prototype.serializeAs_AlmanachCalendarDateMessage = function (param1) {
        param1.writeInt(this.date);
    };
    AlmanachCalendarDateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AlmanachCalendarDateMessage(param1);
    };
    AlmanachCalendarDateMessage.prototype.deserializeAs_AlmanachCalendarDateMessage = function (param1) {
        this.date = param1.readInt();
    };
    AlmanachCalendarDateMessage.ID = 6341;
    return AlmanachCalendarDateMessage;
})(network_message_1.NetworkMessage);
module.exports = AlmanachCalendarDateMessage;
