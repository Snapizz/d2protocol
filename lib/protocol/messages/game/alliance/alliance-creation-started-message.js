/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceCreationStartedMessage = (function (_super) {
    __extends(AllianceCreationStartedMessage, _super);
    function AllianceCreationStartedMessage() {
        _super.call(this);
    }
    AllianceCreationStartedMessage.prototype.getMessageId = function () {
        return AllianceCreationStartedMessage.ID;
    };
    AllianceCreationStartedMessage.prototype.reset = function () {
    };
    AllianceCreationStartedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceCreationStartedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceCreationStartedMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceCreationStartedMessage(param1);
    };
    AllianceCreationStartedMessage.prototype.serializeAs_AllianceCreationStartedMessage = function (param1) {
    };
    AllianceCreationStartedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceCreationStartedMessage(param1);
    };
    AllianceCreationStartedMessage.prototype.deserializeAs_AllianceCreationStartedMessage = function (param1) {
    };
    AllianceCreationStartedMessage.ID = 6394;
    return AllianceCreationStartedMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceCreationStartedMessage;
