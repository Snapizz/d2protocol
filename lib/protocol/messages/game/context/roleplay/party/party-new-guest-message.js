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
var PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations');
var PartyNewGuestMessage = (function (_super) {
    __extends(PartyNewGuestMessage, _super);
    function PartyNewGuestMessage() {
        this.guest = new PartyGuestInformations();
        _super.call(this);
    }
    PartyNewGuestMessage.prototype.getMessageId = function () {
        return PartyNewGuestMessage.ID;
    };
    PartyNewGuestMessage.prototype.reset = function () {
        this.guest = new PartyGuestInformations();
    };
    PartyNewGuestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyNewGuestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyNewGuestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyNewGuestMessage(param1);
    };
    PartyNewGuestMessage.prototype.serializeAs_PartyNewGuestMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyEventMessage.call(this, param1);
        this.guest.serializeAs_PartyGuestInformations(param1);
    };
    PartyNewGuestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyNewGuestMessage(param1);
    };
    PartyNewGuestMessage.prototype.deserializeAs_PartyNewGuestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.guest = new PartyGuestInformations();
        this.guest.deserialize(param1);
    };
    PartyNewGuestMessage.ID = 6260;
    return PartyNewGuestMessage;
})(AbstractPartyEventMessage);
module.exports = PartyNewGuestMessage;
