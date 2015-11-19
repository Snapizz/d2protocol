/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismAttackRequestMessage = (function (_super) {
    __extends(PrismAttackRequestMessage, _super);
    function PrismAttackRequestMessage() {
        _super.call(this);
    }
    PrismAttackRequestMessage.prototype.getMessageId = function () {
        return PrismAttackRequestMessage.ID;
    };
    PrismAttackRequestMessage.prototype.reset = function () {
    };
    PrismAttackRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismAttackRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismAttackRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismAttackRequestMessage(param1);
    };
    PrismAttackRequestMessage.prototype.serializeAs_PrismAttackRequestMessage = function (param1) {
    };
    PrismAttackRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismAttackRequestMessage(param1);
    };
    PrismAttackRequestMessage.prototype.deserializeAs_PrismAttackRequestMessage = function (param1) {
    };
    PrismAttackRequestMessage.ID = 6042;
    return PrismAttackRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismAttackRequestMessage;
