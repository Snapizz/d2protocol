/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var StorageKamasUpdateMessage = (function (_super) {
    __extends(StorageKamasUpdateMessage, _super);
    function StorageKamasUpdateMessage() {
        this.kamasTotal = 0;
        _super.call(this);
    }
    StorageKamasUpdateMessage.prototype.getMessageId = function () {
        return StorageKamasUpdateMessage.ID;
    };
    StorageKamasUpdateMessage.prototype.reset = function () {
        this.kamasTotal = 0;
    };
    StorageKamasUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StorageKamasUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StorageKamasUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_StorageKamasUpdateMessage(param1);
    };
    StorageKamasUpdateMessage.prototype.serializeAs_StorageKamasUpdateMessage = function (param1) {
        param1.writeInt(this.kamasTotal);
    };
    StorageKamasUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StorageKamasUpdateMessage(param1);
    };
    StorageKamasUpdateMessage.prototype.deserializeAs_StorageKamasUpdateMessage = function (param1) {
        this.kamasTotal = param1.readInt();
    };
    StorageKamasUpdateMessage.ID = 5645;
    return StorageKamasUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = StorageKamasUpdateMessage;
