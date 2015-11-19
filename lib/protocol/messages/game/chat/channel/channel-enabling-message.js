/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChannelEnablingMessage = (function (_super) {
    __extends(ChannelEnablingMessage, _super);
    function ChannelEnablingMessage() {
        this.channel = 0;
        this.enable = false;
        _super.call(this);
    }
    ChannelEnablingMessage.prototype.getMessageId = function () {
        return ChannelEnablingMessage.ID;
    };
    ChannelEnablingMessage.prototype.reset = function () {
        this.channel = 0;
        this.enable = false;
    };
    ChannelEnablingMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChannelEnablingMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChannelEnablingMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChannelEnablingMessage(param1);
    };
    ChannelEnablingMessage.prototype.serializeAs_ChannelEnablingMessage = function (param1) {
        param1.writeByte(this.channel);
        param1.writeBoolean(this.enable);
    };
    ChannelEnablingMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChannelEnablingMessage(param1);
    };
    ChannelEnablingMessage.prototype.deserializeAs_ChannelEnablingMessage = function (param1) {
        this.channel = param1.readByte();
        if (this.channel < 0) {
            throw new Error('Forbidden value (' + this.channel + ') on element of ChannelEnablingMessage.channel.');
        }
        this.enable = param1.readBoolean();
    };
    ChannelEnablingMessage.ID = 890;
    return ChannelEnablingMessage;
})(network_message_1.NetworkMessage);
module.exports = ChannelEnablingMessage;
