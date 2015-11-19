/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TeleportRequestMessage = (function (_super) {
    __extends(TeleportRequestMessage, _super);
    function TeleportRequestMessage() {
        this.teleporterType = 0;
        this.mapId = 0;
        _super.call(this);
    }
    TeleportRequestMessage.prototype.getMessageId = function () {
        return TeleportRequestMessage.ID;
    };
    TeleportRequestMessage.prototype.reset = function () {
        this.teleporterType = 0;
        this.mapId = 0;
    };
    TeleportRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TeleportRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TeleportRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_TeleportRequestMessage(param1);
    };
    TeleportRequestMessage.prototype.serializeAs_TeleportRequestMessage = function (param1) {
        param1.writeByte(this.teleporterType);
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element mapId.');
        }
        param1.writeInt(this.mapId);
    };
    TeleportRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TeleportRequestMessage(param1);
    };
    TeleportRequestMessage.prototype.deserializeAs_TeleportRequestMessage = function (param1) {
        this.teleporterType = param1.readByte();
        if (this.teleporterType < 0) {
            throw new Error('Forbidden value (' + this.teleporterType + ') on element of TeleportRequestMessage.teleporterType.');
        }
        this.mapId = param1.readInt();
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element of TeleportRequestMessage.mapId.');
        }
    };
    TeleportRequestMessage.ID = 5961;
    return TeleportRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = TeleportRequestMessage;
