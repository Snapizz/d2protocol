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
var PartyInvitationCancelledForGuestMessage = (function (_super) {
    __extends(PartyInvitationCancelledForGuestMessage, _super);
    function PartyInvitationCancelledForGuestMessage() {
        this.cancelerId = 0;
        _super.call(this);
    }
    PartyInvitationCancelledForGuestMessage.prototype.getMessageId = function () {
        return PartyInvitationCancelledForGuestMessage.ID;
    };
    PartyInvitationCancelledForGuestMessage.prototype.reset = function () {
        this.cancelerId = 0;
    };
    PartyInvitationCancelledForGuestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyInvitationCancelledForGuestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyInvitationCancelledForGuestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyInvitationCancelledForGuestMessage(param1);
    };
    PartyInvitationCancelledForGuestMessage.prototype.serializeAs_PartyInvitationCancelledForGuestMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        if (this.cancelerId < 0) {
            throw new Error('Forbidden value (' + this.cancelerId + ') on element cancelerId.');
        }
        param1.writeVarInt(this.cancelerId);
    };
    PartyInvitationCancelledForGuestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyInvitationCancelledForGuestMessage(param1);
    };
    PartyInvitationCancelledForGuestMessage.prototype.deserializeAs_PartyInvitationCancelledForGuestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.cancelerId = param1.readVarUhInt();
        if (this.cancelerId < 0) {
            throw new Error('Forbidden value (' + this.cancelerId + ') on element of PartyInvitationCancelledForGuestMessage.cancelerId.');
        }
    };
    PartyInvitationCancelledForGuestMessage.ID = 6256;
    return PartyInvitationCancelledForGuestMessage;
})(AbstractPartyMessage);
module.exports = PartyInvitationCancelledForGuestMessage;
