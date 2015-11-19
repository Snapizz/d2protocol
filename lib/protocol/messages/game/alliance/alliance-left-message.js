/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceLeftMessage = (function (_super) {
    __extends(AllianceLeftMessage, _super);
    function AllianceLeftMessage() {
        _super.call(this);
    }
    AllianceLeftMessage.prototype.getMessageId = function () {
        return AllianceLeftMessage.ID;
    };
    AllianceLeftMessage.prototype.reset = function () {
    };
    AllianceLeftMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceLeftMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceLeftMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceLeftMessage(param1);
    };
    AllianceLeftMessage.prototype.serializeAs_AllianceLeftMessage = function (param1) {
    };
    AllianceLeftMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceLeftMessage(param1);
    };
    AllianceLeftMessage.prototype.deserializeAs_AllianceLeftMessage = function (param1) {
    };
    AllianceLeftMessage.ID = 6398;
    return AllianceLeftMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceLeftMessage;
