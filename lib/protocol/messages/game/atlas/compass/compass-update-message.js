/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MapCoordinates = require('../../../../types/game/context/map-coordinates');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var CompassUpdateMessage = (function (_super) {
    __extends(CompassUpdateMessage, _super);
    function CompassUpdateMessage() {
        this.type = 0;
        this.coords = new MapCoordinates();
        _super.call(this);
    }
    CompassUpdateMessage.prototype.getMessageId = function () {
        return CompassUpdateMessage.ID;
    };
    CompassUpdateMessage.prototype.reset = function () {
        this.type = 0;
        this.coords = new MapCoordinates();
    };
    CompassUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CompassUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CompassUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_CompassUpdateMessage(param1);
    };
    CompassUpdateMessage.prototype.serializeAs_CompassUpdateMessage = function (param1) {
        param1.writeByte(this.type);
        param1.writeShort(this.coords.getTypeId());
        this.coords.serialize(param1);
    };
    CompassUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CompassUpdateMessage(param1);
    };
    CompassUpdateMessage.prototype.deserializeAs_CompassUpdateMessage = function (param1) {
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of CompassUpdateMessage.type.');
        }
        var _loc2_ = param1.readUnsignedShort();
        this.coords = ProtocolTypeManager.getInstance(MapCoordinates, _loc2_);
        this.coords.deserialize(param1);
    };
    CompassUpdateMessage.ID = 5591;
    return CompassUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = CompassUpdateMessage;
