/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChannelEnablingChangeMessage = (function (_super) {
    __extends(ChannelEnablingChangeMessage, _super);
    function ChannelEnablingChangeMessage() {
        this.channel = 0;
        this.enable = false;
        _super.call(this);
    }
    ChannelEnablingChangeMessage.prototype.getMessageId = function () {
        return ChannelEnablingChangeMessage.ID;
    };
    ChannelEnablingChangeMessage.prototype.reset = function () {
        this.channel = 0;
        this.enable = false;
    };
    ChannelEnablingChangeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChannelEnablingChangeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChannelEnablingChangeMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChannelEnablingChangeMessage(param1);
    };
    ChannelEnablingChangeMessage.prototype.serializeAs_ChannelEnablingChangeMessage = function (param1) {
        param1.writeByte(this.channel);
        param1.writeBoolean(this.enable);
    };
    ChannelEnablingChangeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChannelEnablingChangeMessage(param1);
    };
    ChannelEnablingChangeMessage.prototype.deserializeAs_ChannelEnablingChangeMessage = function (param1) {
        this.channel = param1.readByte();
        if (this.channel < 0) {
            throw new Error('Forbidden value (' + this.channel + ') on element of ChannelEnablingChangeMessage.channel.');
        }
        this.enable = param1.readBoolean();
    };
    ChannelEnablingChangeMessage.ID = 891;
    return ChannelEnablingChangeMessage;
})(network_message_1.NetworkMessage);
module.exports = ChannelEnablingChangeMessage;
