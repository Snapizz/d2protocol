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
var PartyInvitationDetailsRequestMessage = (function (_super) {
    __extends(PartyInvitationDetailsRequestMessage, _super);
    function PartyInvitationDetailsRequestMessage() {
        _super.call(this);
    }
    PartyInvitationDetailsRequestMessage.prototype.getMessageId = function () {
        return PartyInvitationDetailsRequestMessage.ID;
    };
    PartyInvitationDetailsRequestMessage.prototype.reset = function () {
    };
    PartyInvitationDetailsRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyInvitationDetailsRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyInvitationDetailsRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyInvitationDetailsRequestMessage(param1);
    };
    PartyInvitationDetailsRequestMessage.prototype.serializeAs_PartyInvitationDetailsRequestMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
    };
    PartyInvitationDetailsRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyInvitationDetailsRequestMessage(param1);
    };
    PartyInvitationDetailsRequestMessage.prototype.deserializeAs_PartyInvitationDetailsRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    PartyInvitationDetailsRequestMessage.ID = 6264;
    return PartyInvitationDetailsRequestMessage;
})(AbstractPartyMessage);
module.exports = PartyInvitationDetailsRequestMessage;
