/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TeleportDestinationsListMessage = require('./teleport-destinations-list-message');
var ZaapListMessage = (function (_super) {
    __extends(ZaapListMessage, _super);
    function ZaapListMessage() {
        this.spawnMapId = 0;
        _super.call(this);
    }
    ZaapListMessage.prototype.getMessageId = function () {
        return ZaapListMessage.ID;
    };
    ZaapListMessage.prototype.reset = function () {
        this.spawnMapId = 0;
    };
    ZaapListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ZaapListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ZaapListMessage.prototype.serialize = function (param1) {
        this.serializeAs_ZaapListMessage(param1);
    };
    ZaapListMessage.prototype.serializeAs_ZaapListMessage = function (param1) {
        _super.prototype.serializeAs_TeleportDestinationsListMessage.call(this, param1);
        if (this.spawnMapId < 0) {
            throw new Error('Forbidden value (' + this.spawnMapId + ') on element spawnMapId.');
        }
        param1.writeInt(this.spawnMapId);
    };
    ZaapListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ZaapListMessage(param1);
    };
    ZaapListMessage.prototype.deserializeAs_ZaapListMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.spawnMapId = param1.readInt();
        if (this.spawnMapId < 0) {
            throw new Error('Forbidden value (' + this.spawnMapId + ') on element of ZaapListMessage.spawnMapId.');
        }
    };
    ZaapListMessage.ID = 1604;
    return ZaapListMessage;
})(TeleportDestinationsListMessage);
module.exports = ZaapListMessage;
