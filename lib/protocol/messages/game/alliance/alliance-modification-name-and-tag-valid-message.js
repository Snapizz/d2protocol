/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceModificationNameAndTagValidMessage = (function (_super) {
    __extends(AllianceModificationNameAndTagValidMessage, _super);
    function AllianceModificationNameAndTagValidMessage() {
        this.allianceName = '';
        this.allianceTag = '';
        _super.call(this);
    }
    AllianceModificationNameAndTagValidMessage.prototype.getMessageId = function () {
        return AllianceModificationNameAndTagValidMessage.ID;
    };
    AllianceModificationNameAndTagValidMessage.prototype.reset = function () {
        this.allianceName = '';
        this.allianceTag = '';
    };
    AllianceModificationNameAndTagValidMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceModificationNameAndTagValidMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceModificationNameAndTagValidMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceModificationNameAndTagValidMessage(param1);
    };
    AllianceModificationNameAndTagValidMessage.prototype.serializeAs_AllianceModificationNameAndTagValidMessage = function (param1) {
        param1.writeUTF(this.allianceName);
        param1.writeUTF(this.allianceTag);
    };
    AllianceModificationNameAndTagValidMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceModificationNameAndTagValidMessage(param1);
    };
    AllianceModificationNameAndTagValidMessage.prototype.deserializeAs_AllianceModificationNameAndTagValidMessage = function (param1) {
        this.allianceName = param1.readUTF();
        this.allianceTag = param1.readUTF();
    };
    AllianceModificationNameAndTagValidMessage.ID = 6449;
    return AllianceModificationNameAndTagValidMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceModificationNameAndTagValidMessage;
