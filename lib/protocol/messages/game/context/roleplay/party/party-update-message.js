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
var PartyMemberInformations = require('../../../../../types/game/context/roleplay/party/party-member-informations');
var ProtocolTypeManager = require('../../../../../protocol-type-manager');
var PartyUpdateMessage = (function (_super) {
    __extends(PartyUpdateMessage, _super);
    function PartyUpdateMessage() {
        this.memberInformations = new PartyMemberInformations();
        _super.call(this);
    }
    PartyUpdateMessage.prototype.getMessageId = function () {
        return PartyUpdateMessage.ID;
    };
    PartyUpdateMessage.prototype.reset = function () {
        this.memberInformations = new PartyMemberInformations();
    };
    PartyUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyUpdateMessage(param1);
    };
    PartyUpdateMessage.prototype.serializeAs_PartyUpdateMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyEventMessage.call(this, param1);
        param1.writeShort(this.memberInformations.getTypeId());
        this.memberInformations.serialize(param1);
    };
    PartyUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyUpdateMessage(param1);
    };
    PartyUpdateMessage.prototype.deserializeAs_PartyUpdateMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        this.memberInformations = ProtocolTypeManager.getInstance(PartyMemberInformations, _loc2_);
        this.memberInformations.deserialize(param1);
    };
    PartyUpdateMessage.ID = 5575;
    return PartyUpdateMessage;
})(AbstractPartyEventMessage);
module.exports = PartyUpdateMessage;
