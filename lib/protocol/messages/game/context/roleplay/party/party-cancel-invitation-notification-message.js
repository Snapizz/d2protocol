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
var PartyCancelInvitationNotificationMessage = (function (_super) {
    __extends(PartyCancelInvitationNotificationMessage, _super);
    function PartyCancelInvitationNotificationMessage() {
        this.cancelerId = 0;
        this.guestId = 0;
        _super.call(this);
    }
    PartyCancelInvitationNotificationMessage.prototype.getMessageId = function () {
        return PartyCancelInvitationNotificationMessage.ID;
    };
    PartyCancelInvitationNotificationMessage.prototype.reset = function () {
        this.cancelerId = 0;
        this.guestId = 0;
    };
    PartyCancelInvitationNotificationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyCancelInvitationNotificationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyCancelInvitationNotificationMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyCancelInvitationNotificationMessage(param1);
    };
    PartyCancelInvitationNotificationMessage.prototype.serializeAs_PartyCancelInvitationNotificationMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyEventMessage.call(this, param1);
        if (this.cancelerId < 0) {
            throw new Error('Forbidden value (' + this.cancelerId + ') on element cancelerId.');
        }
        param1.writeVarInt(this.cancelerId);
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element guestId.');
        }
        param1.writeVarInt(this.guestId);
    };
    PartyCancelInvitationNotificationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyCancelInvitationNotificationMessage(param1);
    };
    PartyCancelInvitationNotificationMessage.prototype.deserializeAs_PartyCancelInvitationNotificationMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.cancelerId = param1.readVarUhInt();
        if (this.cancelerId < 0) {
            throw new Error('Forbidden value (' + this.cancelerId + ') on element of PartyCancelInvitationNotificationMessage.cancelerId.');
        }
        this.guestId = param1.readVarUhInt();
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element of PartyCancelInvitationNotificationMessage.guestId.');
        }
    };
    PartyCancelInvitationNotificationMessage.ID = 6251;
    return PartyCancelInvitationNotificationMessage;
})(AbstractPartyEventMessage);
module.exports = PartyCancelInvitationNotificationMessage;
