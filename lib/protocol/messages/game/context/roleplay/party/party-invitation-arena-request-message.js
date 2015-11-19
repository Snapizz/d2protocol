/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PartyInvitationRequestMessage = require('./party-invitation-request-message');
var PartyInvitationArenaRequestMessage = (function (_super) {
    __extends(PartyInvitationArenaRequestMessage, _super);
    function PartyInvitationArenaRequestMessage() {
        _super.call(this);
    }
    PartyInvitationArenaRequestMessage.prototype.getMessageId = function () {
        return PartyInvitationArenaRequestMessage.ID;
    };
    PartyInvitationArenaRequestMessage.prototype.reset = function () {
    };
    PartyInvitationArenaRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyInvitationArenaRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyInvitationArenaRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyInvitationArenaRequestMessage(param1);
    };
    PartyInvitationArenaRequestMessage.prototype.serializeAs_PartyInvitationArenaRequestMessage = function (param1) {
        _super.prototype.serializeAs_PartyInvitationRequestMessage.call(this, param1);
    };
    PartyInvitationArenaRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyInvitationArenaRequestMessage(param1);
    };
    PartyInvitationArenaRequestMessage.prototype.deserializeAs_PartyInvitationArenaRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    PartyInvitationArenaRequestMessage.ID = 6283;
    return PartyInvitationArenaRequestMessage;
})(PartyInvitationRequestMessage);
module.exports = PartyInvitationArenaRequestMessage;
