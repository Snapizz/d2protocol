/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceInvitationMessage = (function (_super) {
    __extends(AllianceInvitationMessage, _super);
    function AllianceInvitationMessage() {
        this.targetId = 0;
        _super.call(this);
    }
    AllianceInvitationMessage.prototype.getMessageId = function () {
        return AllianceInvitationMessage.ID;
    };
    AllianceInvitationMessage.prototype.reset = function () {
        this.targetId = 0;
    };
    AllianceInvitationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceInvitationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceInvitationMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceInvitationMessage(param1);
    };
    AllianceInvitationMessage.prototype.serializeAs_AllianceInvitationMessage = function (param1) {
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element targetId.');
        }
        param1.writeVarInt(this.targetId);
    };
    AllianceInvitationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceInvitationMessage(param1);
    };
    AllianceInvitationMessage.prototype.deserializeAs_AllianceInvitationMessage = function (param1) {
        this.targetId = param1.readVarUhInt();
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element of AllianceInvitationMessage.targetId.');
        }
    };
    AllianceInvitationMessage.ID = 6395;
    return AllianceInvitationMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceInvitationMessage;
