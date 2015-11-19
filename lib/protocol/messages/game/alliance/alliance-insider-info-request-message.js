/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceInsiderInfoRequestMessage = (function (_super) {
    __extends(AllianceInsiderInfoRequestMessage, _super);
    function AllianceInsiderInfoRequestMessage() {
        _super.call(this);
    }
    AllianceInsiderInfoRequestMessage.prototype.getMessageId = function () {
        return AllianceInsiderInfoRequestMessage.ID;
    };
    AllianceInsiderInfoRequestMessage.prototype.reset = function () {
    };
    AllianceInsiderInfoRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceInsiderInfoRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceInsiderInfoRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceInsiderInfoRequestMessage(param1);
    };
    AllianceInsiderInfoRequestMessage.prototype.serializeAs_AllianceInsiderInfoRequestMessage = function (param1) {
    };
    AllianceInsiderInfoRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceInsiderInfoRequestMessage(param1);
    };
    AllianceInsiderInfoRequestMessage.prototype.deserializeAs_AllianceInsiderInfoRequestMessage = function (param1) {
    };
    AllianceInsiderInfoRequestMessage.ID = 6417;
    return AllianceInsiderInfoRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceInsiderInfoRequestMessage;
