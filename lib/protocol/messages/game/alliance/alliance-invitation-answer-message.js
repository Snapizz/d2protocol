/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceInvitationAnswerMessage = (function (_super) {
    __extends(AllianceInvitationAnswerMessage, _super);
    function AllianceInvitationAnswerMessage() {
        this.accept = false;
        _super.call(this);
    }
    AllianceInvitationAnswerMessage.prototype.getMessageId = function () {
        return AllianceInvitationAnswerMessage.ID;
    };
    AllianceInvitationAnswerMessage.prototype.reset = function () {
        this.accept = false;
    };
    AllianceInvitationAnswerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceInvitationAnswerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceInvitationAnswerMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceInvitationAnswerMessage(param1);
    };
    AllianceInvitationAnswerMessage.prototype.serializeAs_AllianceInvitationAnswerMessage = function (param1) {
        param1.writeBoolean(this.accept);
    };
    AllianceInvitationAnswerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceInvitationAnswerMessage(param1);
    };
    AllianceInvitationAnswerMessage.prototype.deserializeAs_AllianceInvitationAnswerMessage = function (param1) {
        this.accept = param1.readBoolean();
    };
    AllianceInvitationAnswerMessage.ID = 6401;
    return AllianceInvitationAnswerMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceInvitationAnswerMessage;
