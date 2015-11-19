/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractPartyEventMessage = require('./abstract-party-event-message');
var PartyRefuseInvitationNotificationMessage = (function (_super) {
    __extends(PartyRefuseInvitationNotificationMessage, _super);
    function PartyRefuseInvitationNotificationMessage() {
        this.guestId = 0;
        _super.call(this);
    }
    PartyRefuseInvitationNotificationMessage.prototype.getMessageId = function () {
        return PartyRefuseInvitationNotificationMessage.ID;
    };
    PartyRefuseInvitationNotificationMessage.prototype.reset = function () {
        this.guestId = 0;
    };
    PartyRefuseInvitationNotificationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyRefuseInvitationNotificationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyRefuseInvitationNotificationMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyRefuseInvitationNotificationMessage(param1);
    };
    PartyRefuseInvitationNotificationMessage.prototype.serializeAs_PartyRefuseInvitationNotificationMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyEventMessage.call(this, param1);
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element guestId.');
        }
        param1.writeVarInt(this.guestId);
    };
    PartyRefuseInvitationNotificationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyRefuseInvitationNotificationMessage(param1);
    };
    PartyRefuseInvitationNotificationMessage.prototype.deserializeAs_PartyRefuseInvitationNotificationMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.guestId = param1.readVarUhInt();
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element of PartyRefuseInvitationNotificationMessage.guestId.');
        }
    };
    PartyRefuseInvitationNotificationMessage.ID = 5596;
    return PartyRefuseInvitationNotificationMessage;
})(AbstractPartyEventMessage);
module.exports = PartyRefuseInvitationNotificationMessage;
