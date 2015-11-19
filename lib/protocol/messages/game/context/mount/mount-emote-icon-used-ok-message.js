/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountEmoteIconUsedOkMessage = (function (_super) {
    __extends(MountEmoteIconUsedOkMessage, _super);
    function MountEmoteIconUsedOkMessage() {
        this.mountId = 0;
        this.reactionType = 0;
        _super.call(this);
    }
    MountEmoteIconUsedOkMessage.prototype.getMessageId = function () {
        return MountEmoteIconUsedOkMessage.ID;
    };
    MountEmoteIconUsedOkMessage.prototype.reset = function () {
        this.mountId = 0;
        this.reactionType = 0;
    };
    MountEmoteIconUsedOkMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountEmoteIconUsedOkMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountEmoteIconUsedOkMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountEmoteIconUsedOkMessage(param1);
    };
    MountEmoteIconUsedOkMessage.prototype.serializeAs_MountEmoteIconUsedOkMessage = function (param1) {
        param1.writeVarInt(this.mountId);
        if (this.reactionType < 0) {
            throw new Error('Forbidden value (' + this.reactionType + ') on element reactionType.');
        }
        param1.writeByte(this.reactionType);
    };
    MountEmoteIconUsedOkMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountEmoteIconUsedOkMessage(param1);
    };
    MountEmoteIconUsedOkMessage.prototype.deserializeAs_MountEmoteIconUsedOkMessage = function (param1) {
        this.mountId = param1.readVarInt();
        this.reactionType = param1.readByte();
        if (this.reactionType < 0) {
            throw new Error('Forbidden value (' + this.reactionType + ') on element of MountEmoteIconUsedOkMessage.reactionType.');
        }
    };
    MountEmoteIconUsedOkMessage.ID = 5978;
    return MountEmoteIconUsedOkMessage;
})(network_message_1.NetworkMessage);
module.exports = MountEmoteIconUsedOkMessage;
