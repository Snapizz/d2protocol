/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicNamedAllianceInformations = require('../../../types/game/context/roleplay/basic-named-alliance-informations');
var AllianceInvitedMessage = (function (_super) {
    __extends(AllianceInvitedMessage, _super);
    function AllianceInvitedMessage() {
        this.recruterId = 0;
        this.recruterName = '';
        this.allianceInfo = new BasicNamedAllianceInformations();
        _super.call(this);
    }
    AllianceInvitedMessage.prototype.getMessageId = function () {
        return AllianceInvitedMessage.ID;
    };
    AllianceInvitedMessage.prototype.reset = function () {
        this.recruterId = 0;
        this.recruterName = '';
        this.allianceInfo = new BasicNamedAllianceInformations();
    };
    AllianceInvitedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceInvitedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceInvitedMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceInvitedMessage(param1);
    };
    AllianceInvitedMessage.prototype.serializeAs_AllianceInvitedMessage = function (param1) {
        if (this.recruterId < 0) {
            throw new Error('Forbidden value (' + this.recruterId + ') on element recruterId.');
        }
        param1.writeVarInt(this.recruterId);
        param1.writeUTF(this.recruterName);
        this.allianceInfo.serializeAs_BasicNamedAllianceInformations(param1);
    };
    AllianceInvitedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceInvitedMessage(param1);
    };
    AllianceInvitedMessage.prototype.deserializeAs_AllianceInvitedMessage = function (param1) {
        this.recruterId = param1.readVarUhInt();
        if (this.recruterId < 0) {
            throw new Error('Forbidden value (' + this.recruterId + ') on element of AllianceInvitedMessage.recruterId.');
        }
        this.recruterName = param1.readUTF();
        this.allianceInfo = new BasicNamedAllianceInformations();
        this.allianceInfo.deserialize(param1);
    };
    AllianceInvitedMessage.ID = 6397;
    return AllianceInvitedMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceInvitedMessage;
