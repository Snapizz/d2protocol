/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractPartyMessage = require('./abstract-party-message');
var PartyRefuseInvitationMessage = (function (_super) {
    __extends(PartyRefuseInvitationMessage, _super);
    function PartyRefuseInvitationMessage() {
        _super.call(this);
    }
    PartyRefuseInvitationMessage.prototype.getMessageId = function () {
        return PartyRefuseInvitationMessage.ID;
    };
    PartyRefuseInvitationMessage.prototype.reset = function () {
    };
    PartyRefuseInvitationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyRefuseInvitationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyRefuseInvitationMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyRefuseInvitationMessage(param1);
    };
    PartyRefuseInvitationMessage.prototype.serializeAs_PartyRefuseInvitationMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
    };
    PartyRefuseInvitationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyRefuseInvitationMessage(param1);
    };
    PartyRefuseInvitationMessage.prototype.deserializeAs_PartyRefuseInvitationMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    PartyRefuseInvitationMessage.ID = 5582;
    return PartyRefuseInvitationMessage;
})(AbstractPartyMessage);
module.exports = PartyRefuseInvitationMessage;
