/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceInvitationStateRecrutedMessage = (function (_super) {
    __extends(AllianceInvitationStateRecrutedMessage, _super);
    function AllianceInvitationStateRecrutedMessage() {
        this.invitationState = 0;
        _super.call(this);
    }
    AllianceInvitationStateRecrutedMessage.prototype.getMessageId = function () {
        return AllianceInvitationStateRecrutedMessage.ID;
    };
    AllianceInvitationStateRecrutedMessage.prototype.reset = function () {
        this.invitationState = 0;
    };
    AllianceInvitationStateRecrutedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceInvitationStateRecrutedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceInvitationStateRecrutedMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceInvitationStateRecrutedMessage(param1);
    };
    AllianceInvitationStateRecrutedMessage.prototype.serializeAs_AllianceInvitationStateRecrutedMessage = function (param1) {
        param1.writeByte(this.invitationState);
    };
    AllianceInvitationStateRecrutedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceInvitationStateRecrutedMessage(param1);
    };
    AllianceInvitationStateRecrutedMessage.prototype.deserializeAs_AllianceInvitationStateRecrutedMessage = function (param1) {
        this.invitationState = param1.readByte();
        if (this.invitationState < 0) {
            throw new Error('Forbidden value (' + this.invitationState + ') on element of AllianceInvitationStateRecrutedMessage.invitationState.');
        }
    };
    AllianceInvitationStateRecrutedMessage.ID = 6392;
    return AllianceInvitationStateRecrutedMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceInvitationStateRecrutedMessage;
