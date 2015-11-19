/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MapInformationsRequestMessage = (function (_super) {
    __extends(MapInformationsRequestMessage, _super);
    function MapInformationsRequestMessage() {
        this.mapId = 0;
        _super.call(this);
    }
    MapInformationsRequestMessage.prototype.getMessageId = function () {
        return MapInformationsRequestMessage.ID;
    };
    MapInformationsRequestMessage.prototype.reset = function () {
        this.mapId = 0;
    };
    MapInformationsRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MapInformationsRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MapInformationsRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MapInformationsRequestMessage(param1);
    };
    MapInformationsRequestMessage.prototype.serializeAs_MapInformationsRequestMessage = function (param1) {
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element mapId.');
        }
        param1.writeInt(this.mapId);
    };
    MapInformationsRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MapInformationsRequestMessage(param1);
    };
    MapInformationsRequestMessage.prototype.deserializeAs_MapInformationsRequestMessage = function (param1) {
        this.mapId = param1.readInt();
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element of MapInformationsRequestMessage.mapId.');
        }
    };
    MapInformationsRequestMessage.ID = 225;
    return MapInformationsRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = MapInformationsRequestMessage;
