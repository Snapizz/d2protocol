/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var OnConnectionEventMessage = (function (_super) {
    __extends(OnConnectionEventMessage, _super);
    function OnConnectionEventMessage() {
        this.eventType = 0;
        _super.call(this);
    }
    OnConnectionEventMessage.prototype.getMessageId = function () {
        return OnConnectionEventMessage.ID;
    };
    OnConnectionEventMessage.prototype.reset = function () {
        this.eventType = 0;
    };
    OnConnectionEventMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    OnConnectionEventMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    OnConnectionEventMessage.prototype.serialize = function (param1) {
        this.serializeAs_OnConnectionEventMessage(param1);
    };
    OnConnectionEventMessage.prototype.serializeAs_OnConnectionEventMessage = function (param1) {
        param1.writeByte(this.eventType);
    };
    OnConnectionEventMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_OnConnectionEventMessage(param1);
    };
    OnConnectionEventMessage.prototype.deserializeAs_OnConnectionEventMessage = function (param1) {
        this.eventType = param1.readByte();
        if (this.eventType < 0) {
            throw new Error('Forbidden value (' + this.eventType + ') on element of OnConnectionEventMessage.eventType.');
        }
    };
    OnConnectionEventMessage.ID = 5726;
    return OnConnectionEventMessage;
})(network_message_1.NetworkMessage);
module.exports = OnConnectionEventMessage;
