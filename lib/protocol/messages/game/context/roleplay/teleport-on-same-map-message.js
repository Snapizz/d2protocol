/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TeleportOnSameMapMessage = (function (_super) {
    __extends(TeleportOnSameMapMessage, _super);
    function TeleportOnSameMapMessage() {
        this.targetId = 0;
        this.cellId = 0;
        _super.call(this);
    }
    TeleportOnSameMapMessage.prototype.getMessageId = function () {
        return TeleportOnSameMapMessage.ID;
    };
    TeleportOnSameMapMessage.prototype.reset = function () {
        this.targetId = 0;
        this.cellId = 0;
    };
    TeleportOnSameMapMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TeleportOnSameMapMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TeleportOnSameMapMessage.prototype.serialize = function (param1) {
        this.serializeAs_TeleportOnSameMapMessage(param1);
    };
    TeleportOnSameMapMessage.prototype.serializeAs_TeleportOnSameMapMessage = function (param1) {
        param1.writeInt(this.targetId);
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);
    };
    TeleportOnSameMapMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TeleportOnSameMapMessage(param1);
    };
    TeleportOnSameMapMessage.prototype.deserializeAs_TeleportOnSameMapMessage = function (param1) {
        this.targetId = param1.readInt();
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of TeleportOnSameMapMessage.cellId.');
        }
    };
    TeleportOnSameMapMessage.ID = 6048;
    return TeleportOnSameMapMessage;
})(network_message_1.NetworkMessage);
module.exports = TeleportOnSameMapMessage;
