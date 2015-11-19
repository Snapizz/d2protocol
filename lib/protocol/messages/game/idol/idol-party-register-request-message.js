/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdolPartyRegisterRequestMessage = (function (_super) {
    __extends(IdolPartyRegisterRequestMessage, _super);
    function IdolPartyRegisterRequestMessage() {
        this.register = false;
        _super.call(this);
    }
    IdolPartyRegisterRequestMessage.prototype.getMessageId = function () {
        return IdolPartyRegisterRequestMessage.ID;
    };
    IdolPartyRegisterRequestMessage.prototype.reset = function () {
        this.register = false;
    };
    IdolPartyRegisterRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolPartyRegisterRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolPartyRegisterRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolPartyRegisterRequestMessage(param1);
    };
    IdolPartyRegisterRequestMessage.prototype.serializeAs_IdolPartyRegisterRequestMessage = function (param1) {
        param1.writeBoolean(this.register);
    };
    IdolPartyRegisterRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolPartyRegisterRequestMessage(param1);
    };
    IdolPartyRegisterRequestMessage.prototype.deserializeAs_IdolPartyRegisterRequestMessage = function (param1) {
        this.register = param1.readBoolean();
    };
    IdolPartyRegisterRequestMessage.ID = 6582;
    return IdolPartyRegisterRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolPartyRegisterRequestMessage;
