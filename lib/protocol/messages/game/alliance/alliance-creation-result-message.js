/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceCreationResultMessage = (function (_super) {
    __extends(AllianceCreationResultMessage, _super);
    function AllianceCreationResultMessage() {
        this.result = 0;
        _super.call(this);
    }
    AllianceCreationResultMessage.prototype.getMessageId = function () {
        return AllianceCreationResultMessage.ID;
    };
    AllianceCreationResultMessage.prototype.reset = function () {
        this.result = 0;
    };
    AllianceCreationResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceCreationResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceCreationResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceCreationResultMessage(param1);
    };
    AllianceCreationResultMessage.prototype.serializeAs_AllianceCreationResultMessage = function (param1) {
        param1.writeByte(this.result);
    };
    AllianceCreationResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceCreationResultMessage(param1);
    };
    AllianceCreationResultMessage.prototype.deserializeAs_AllianceCreationResultMessage = function (param1) {
        this.result = param1.readByte();
        if (this.result < 0) {
            throw new Error('Forbidden value (' + this.result + ') on element of AllianceCreationResultMessage.result.');
        }
    };
    AllianceCreationResultMessage.ID = 6391;
    return AllianceCreationResultMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceCreationResultMessage;
