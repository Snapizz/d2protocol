/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseGuildShareRequestMessage = (function (_super) {
    __extends(HouseGuildShareRequestMessage, _super);
    function HouseGuildShareRequestMessage() {
        this.enable = false;
        this.rights = 0;
        _super.call(this);
    }
    HouseGuildShareRequestMessage.prototype.getMessageId = function () {
        return HouseGuildShareRequestMessage.ID;
    };
    HouseGuildShareRequestMessage.prototype.reset = function () {
        this.enable = false;
        this.rights = 0;
    };
    HouseGuildShareRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseGuildShareRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseGuildShareRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseGuildShareRequestMessage(param1);
    };
    HouseGuildShareRequestMessage.prototype.serializeAs_HouseGuildShareRequestMessage = function (param1) {
        param1.writeBoolean(this.enable);
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element rights.');
        }
        param1.writeVarInt(this.rights);
    };
    HouseGuildShareRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseGuildShareRequestMessage(param1);
    };
    HouseGuildShareRequestMessage.prototype.deserializeAs_HouseGuildShareRequestMessage = function (param1) {
        this.enable = param1.readBoolean();
        this.rights = param1.readVarUhInt();
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element of HouseGuildShareRequestMessage.rights.');
        }
    };
    HouseGuildShareRequestMessage.ID = 5704;
    return HouseGuildShareRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseGuildShareRequestMessage;
