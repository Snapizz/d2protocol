/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var KamasUpdateMessage = (function (_super) {
    __extends(KamasUpdateMessage, _super);
    function KamasUpdateMessage() {
        this.kamasTotal = 0;
        _super.call(this);
    }
    KamasUpdateMessage.prototype.getMessageId = function () {
        return KamasUpdateMessage.ID;
    };
    KamasUpdateMessage.prototype.reset = function () {
        this.kamasTotal = 0;
    };
    KamasUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    KamasUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    KamasUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_KamasUpdateMessage(param1);
    };
    KamasUpdateMessage.prototype.serializeAs_KamasUpdateMessage = function (param1) {
        param1.writeVarInt(this.kamasTotal);
    };
    KamasUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_KamasUpdateMessage(param1);
    };
    KamasUpdateMessage.prototype.deserializeAs_KamasUpdateMessage = function (param1) {
        this.kamasTotal = param1.readVarInt();
    };
    KamasUpdateMessage.ID = 5537;
    return KamasUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = KamasUpdateMessage;
