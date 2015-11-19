/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ZaapRespawnUpdatedMessage = (function (_super) {
    __extends(ZaapRespawnUpdatedMessage, _super);
    function ZaapRespawnUpdatedMessage() {
        this.mapId = 0;
        _super.call(this);
    }
    ZaapRespawnUpdatedMessage.prototype.getMessageId = function () {
        return ZaapRespawnUpdatedMessage.ID;
    };
    ZaapRespawnUpdatedMessage.prototype.reset = function () {
        this.mapId = 0;
    };
    ZaapRespawnUpdatedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ZaapRespawnUpdatedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ZaapRespawnUpdatedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ZaapRespawnUpdatedMessage(param1);
    };
    ZaapRespawnUpdatedMessage.prototype.serializeAs_ZaapRespawnUpdatedMessage = function (param1) {
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element mapId.');
        }
        param1.writeInt(this.mapId);
    };
    ZaapRespawnUpdatedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ZaapRespawnUpdatedMessage(param1);
    };
    ZaapRespawnUpdatedMessage.prototype.deserializeAs_ZaapRespawnUpdatedMessage = function (param1) {
        this.mapId = param1.readInt();
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element of ZaapRespawnUpdatedMessage.mapId.');
        }
    };
    ZaapRespawnUpdatedMessage.ID = 6571;
    return ZaapRespawnUpdatedMessage;
})(network_message_1.NetworkMessage);
module.exports = ZaapRespawnUpdatedMessage;
