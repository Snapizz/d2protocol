/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AcquaintanceSearchErrorMessage = (function (_super) {
    __extends(AcquaintanceSearchErrorMessage, _super);
    function AcquaintanceSearchErrorMessage() {
        this.reason = 0;
        _super.call(this);
    }
    AcquaintanceSearchErrorMessage.prototype.getMessageId = function () {
        return AcquaintanceSearchErrorMessage.ID;
    };
    AcquaintanceSearchErrorMessage.prototype.reset = function () {
        this.reason = 0;
    };
    AcquaintanceSearchErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AcquaintanceSearchErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AcquaintanceSearchErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_AcquaintanceSearchErrorMessage(param1);
    };
    AcquaintanceSearchErrorMessage.prototype.serializeAs_AcquaintanceSearchErrorMessage = function (param1) {
        param1.writeByte(this.reason);
    };
    AcquaintanceSearchErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AcquaintanceSearchErrorMessage(param1);
    };
    AcquaintanceSearchErrorMessage.prototype.deserializeAs_AcquaintanceSearchErrorMessage = function (param1) {
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of AcquaintanceSearchErrorMessage.reason.');
        }
    };
    AcquaintanceSearchErrorMessage.ID = 6143;
    return AcquaintanceSearchErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = AcquaintanceSearchErrorMessage;
