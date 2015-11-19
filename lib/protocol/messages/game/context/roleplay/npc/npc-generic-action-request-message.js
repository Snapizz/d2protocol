/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NpcGenericActionRequestMessage = (function (_super) {
    __extends(NpcGenericActionRequestMessage, _super);
    function NpcGenericActionRequestMessage() {
        this.npcId = 0;
        this.npcActionId = 0;
        this.npcMapId = 0;
        _super.call(this);
    }
    NpcGenericActionRequestMessage.prototype.getMessageId = function () {
        return NpcGenericActionRequestMessage.ID;
    };
    NpcGenericActionRequestMessage.prototype.reset = function () {
        this.npcId = 0;
        this.npcActionId = 0;
        this.npcMapId = 0;
    };
    NpcGenericActionRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NpcGenericActionRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NpcGenericActionRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_NpcGenericActionRequestMessage(param1);
    };
    NpcGenericActionRequestMessage.prototype.serializeAs_NpcGenericActionRequestMessage = function (param1) {
        param1.writeInt(this.npcId);
        if (this.npcActionId < 0) {
            throw new Error('Forbidden value (' + this.npcActionId + ') on element npcActionId.');
        }
        param1.writeByte(this.npcActionId);
        param1.writeInt(this.npcMapId);
    };
    NpcGenericActionRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NpcGenericActionRequestMessage(param1);
    };
    NpcGenericActionRequestMessage.prototype.deserializeAs_NpcGenericActionRequestMessage = function (param1) {
        this.npcId = param1.readInt();
        this.npcActionId = param1.readByte();
        if (this.npcActionId < 0) {
            throw new Error('Forbidden value (' + this.npcActionId + ') on element of NpcGenericActionRequestMessage.npcActionId.');
        }
        this.npcMapId = param1.readInt();
    };
    NpcGenericActionRequestMessage.ID = 5898;
    return NpcGenericActionRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = NpcGenericActionRequestMessage;
