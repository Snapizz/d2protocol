/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChangeMapMessage = (function (_super) {
    __extends(ChangeMapMessage, _super);
    function ChangeMapMessage() {
        this.mapId = 0;
        _super.call(this);
    }
    ChangeMapMessage.prototype.getMessageId = function () {
        return ChangeMapMessage.ID;
    };
    ChangeMapMessage.prototype.reset = function () {
        this.mapId = 0;
    };
    ChangeMapMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChangeMapMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChangeMapMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChangeMapMessage(param1);
    };
    ChangeMapMessage.prototype.serializeAs_ChangeMapMessage = function (param1) {
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element mapId.');
        }
        param1.writeInt(this.mapId);
    };
    ChangeMapMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChangeMapMessage(param1);
    };
    ChangeMapMessage.prototype.deserializeAs_ChangeMapMessage = function (param1) {
        this.mapId = param1.readInt();
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element of ChangeMapMessage.mapId.');
        }
    };
    ChangeMapMessage.ID = 221;
    return ChangeMapMessage;
})(network_message_1.NetworkMessage);
module.exports = ChangeMapMessage;
