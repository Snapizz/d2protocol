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
var PartyCancelInvitationMessage = (function (_super) {
    __extends(PartyCancelInvitationMessage, _super);
    function PartyCancelInvitationMessage() {
        this.guestId = 0;
        _super.call(this);
    }
    PartyCancelInvitationMessage.prototype.getMessageId = function () {
        return PartyCancelInvitationMessage.ID;
    };
    PartyCancelInvitationMessage.prototype.reset = function () {
        this.guestId = 0;
    };
    PartyCancelInvitationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyCancelInvitationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyCancelInvitationMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyCancelInvitationMessage(param1);
    };
    PartyCancelInvitationMessage.prototype.serializeAs_PartyCancelInvitationMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element guestId.');
        }
        param1.writeVarInt(this.guestId);
    };
    PartyCancelInvitationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyCancelInvitationMessage(param1);
    };
    PartyCancelInvitationMessage.prototype.deserializeAs_PartyCancelInvitationMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.guestId = param1.readVarUhInt();
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element of PartyCancelInvitationMessage.guestId.');
        }
    };
    PartyCancelInvitationMessage.ID = 6254;
    return PartyCancelInvitationMessage;
})(AbstractPartyMessage);
module.exports = PartyCancelInvitationMessage;
