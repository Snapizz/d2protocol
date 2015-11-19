/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MapRunningFightDetailsRequestMessage = (function (_super) {
    __extends(MapRunningFightDetailsRequestMessage, _super);
    function MapRunningFightDetailsRequestMessage() {
        this.fightId = 0;
        _super.call(this);
    }
    MapRunningFightDetailsRequestMessage.prototype.getMessageId = function () {
        return MapRunningFightDetailsRequestMessage.ID;
    };
    MapRunningFightDetailsRequestMessage.prototype.reset = function () {
        this.fightId = 0;
    };
    MapRunningFightDetailsRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MapRunningFightDetailsRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MapRunningFightDetailsRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MapRunningFightDetailsRequestMessage(param1);
    };
    MapRunningFightDetailsRequestMessage.prototype.serializeAs_MapRunningFightDetailsRequestMessage = function (param1) {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
    };
    MapRunningFightDetailsRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MapRunningFightDetailsRequestMessage(param1);
    };
    MapRunningFightDetailsRequestMessage.prototype.deserializeAs_MapRunningFightDetailsRequestMessage = function (param1) {
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of MapRunningFightDetailsRequestMessage.fightId.');
        }
    };
    MapRunningFightDetailsRequestMessage.ID = 5750;
    return MapRunningFightDetailsRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = MapRunningFightDetailsRequestMessage;
