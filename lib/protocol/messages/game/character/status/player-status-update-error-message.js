/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PlayerStatusUpdateErrorMessage = (function (_super) {
    __extends(PlayerStatusUpdateErrorMessage, _super);
    function PlayerStatusUpdateErrorMessage() {
        _super.call(this);
    }
    PlayerStatusUpdateErrorMessage.prototype.getMessageId = function () {
        return PlayerStatusUpdateErrorMessage.ID;
    };
    PlayerStatusUpdateErrorMessage.prototype.reset = function () {
    };
    PlayerStatusUpdateErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PlayerStatusUpdateErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PlayerStatusUpdateErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_PlayerStatusUpdateErrorMessage(param1);
    };
    PlayerStatusUpdateErrorMessage.prototype.serializeAs_PlayerStatusUpdateErrorMessage = function (param1) {
    };
    PlayerStatusUpdateErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PlayerStatusUpdateErrorMessage(param1);
    };
    PlayerStatusUpdateErrorMessage.prototype.deserializeAs_PlayerStatusUpdateErrorMessage = function (param1) {
    };
    PlayerStatusUpdateErrorMessage.ID = 6385;
    return PlayerStatusUpdateErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = PlayerStatusUpdateErrorMessage;
