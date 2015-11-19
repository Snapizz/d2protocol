/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceInvitationStateRecruterMessage = (function (_super) {
    __extends(AllianceInvitationStateRecruterMessage, _super);
    function AllianceInvitationStateRecruterMessage() {
        this.recrutedName = '';
        this.invitationState = 0;
        _super.call(this);
    }
    AllianceInvitationStateRecruterMessage.prototype.getMessageId = function () {
        return AllianceInvitationStateRecruterMessage.ID;
    };
    AllianceInvitationStateRecruterMessage.prototype.reset = function () {
        this.recrutedName = '';
        this.invitationState = 0;
    };
    AllianceInvitationStateRecruterMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceInvitationStateRecruterMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceInvitationStateRecruterMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceInvitationStateRecruterMessage(param1);
    };
    AllianceInvitationStateRecruterMessage.prototype.serializeAs_AllianceInvitationStateRecruterMessage = function (param1) {
        param1.writeUTF(this.recrutedName);
        param1.writeByte(this.invitationState);
    };
    AllianceInvitationStateRecruterMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceInvitationStateRecruterMessage(param1);
    };
    AllianceInvitationStateRecruterMessage.prototype.deserializeAs_AllianceInvitationStateRecruterMessage = function (param1) {
        this.recrutedName = param1.readUTF();
        this.invitationState = param1.readByte();
        if (this.invitationState < 0) {
            throw new Error('Forbidden value (' + this.invitationState + ') on element of AllianceInvitationStateRecruterMessage.invitationState.');
        }
    };
    AllianceInvitationStateRecruterMessage.ID = 6396;
    return AllianceInvitationStateRecruterMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceInvitationStateRecruterMessage;
