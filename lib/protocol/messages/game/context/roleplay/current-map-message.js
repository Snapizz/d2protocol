/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CurrentMapMessage = (function (_super) {
    __extends(CurrentMapMessage, _super);
    function CurrentMapMessage() {
        this.mapId = 0;
        this.mapKey = '';
        _super.call(this);
    }
    CurrentMapMessage.prototype.getMessageId = function () {
        return CurrentMapMessage.ID;
    };
    CurrentMapMessage.prototype.reset = function () {
        this.mapId = 0;
        this.mapKey = '';
    };
    CurrentMapMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CurrentMapMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CurrentMapMessage.prototype.serialize = function (param1) {
        this.serializeAs_CurrentMapMessage(param1);
    };
    CurrentMapMessage.prototype.serializeAs_CurrentMapMessage = function (param1) {
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element mapId.');
        }
        param1.writeInt(this.mapId);
        param1.writeUTF(this.mapKey);
    };
    CurrentMapMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CurrentMapMessage(param1);
    };
    CurrentMapMessage.prototype.deserializeAs_CurrentMapMessage = function (param1) {
        this.mapId = param1.readInt();
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element of CurrentMapMessage.mapId.');
        }
        this.mapKey = param1.readUTF();
    };
    CurrentMapMessage.ID = 220;
    return CurrentMapMessage;
})(network_message_1.NetworkMessage);
module.exports = CurrentMapMessage;
