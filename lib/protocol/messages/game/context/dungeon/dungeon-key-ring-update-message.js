/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DungeonKeyRingUpdateMessage = (function (_super) {
    __extends(DungeonKeyRingUpdateMessage, _super);
    function DungeonKeyRingUpdateMessage() {
        this.dungeonId = 0;
        this.available = false;
        _super.call(this);
    }
    DungeonKeyRingUpdateMessage.prototype.getMessageId = function () {
        return DungeonKeyRingUpdateMessage.ID;
    };
    DungeonKeyRingUpdateMessage.prototype.reset = function () {
        this.dungeonId = 0;
        this.available = false;
    };
    DungeonKeyRingUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DungeonKeyRingUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DungeonKeyRingUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_DungeonKeyRingUpdateMessage(param1);
    };
    DungeonKeyRingUpdateMessage.prototype.serializeAs_DungeonKeyRingUpdateMessage = function (param1) {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        param1.writeBoolean(this.available);
    };
    DungeonKeyRingUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DungeonKeyRingUpdateMessage(param1);
    };
    DungeonKeyRingUpdateMessage.prototype.deserializeAs_DungeonKeyRingUpdateMessage = function (param1) {
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of DungeonKeyRingUpdateMessage.dungeonId.');
        }
        this.available = param1.readBoolean();
    };
    DungeonKeyRingUpdateMessage.ID = 6296;
    return DungeonKeyRingUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = DungeonKeyRingUpdateMessage;
