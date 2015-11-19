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
var PartyInvitationDungeonRequestMessage = (function (_super) {
    __extends(PartyInvitationDungeonRequestMessage, _super);
    function PartyInvitationDungeonRequestMessage() {
        this.dungeonId = 0;
        _super.call(this);
    }
    PartyInvitationDungeonRequestMessage.prototype.getMessageId = function () {
        return PartyInvitationDungeonRequestMessage.ID;
    };
    PartyInvitationDungeonRequestMessage.prototype.reset = function () {
        this.dungeonId = 0;
    };
    PartyInvitationDungeonRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyInvitationDungeonRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyInvitationDungeonRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyInvitationDungeonRequestMessage(param1);
    };
    PartyInvitationDungeonRequestMessage.prototype.serializeAs_PartyInvitationDungeonRequestMessage = function (param1) {
        _super.prototype.serializeAs_PartyInvitationRequestMessage.call(this, param1);
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
    };
    PartyInvitationDungeonRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyInvitationDungeonRequestMessage(param1);
    };
    PartyInvitationDungeonRequestMessage.prototype.deserializeAs_PartyInvitationDungeonRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of PartyInvitationDungeonRequestMessage.dungeonId.');
        }
    };
    PartyInvitationDungeonRequestMessage.ID = 6245;
    return PartyInvitationDungeonRequestMessage;
})(PartyInvitationRequestMessage);
module.exports = PartyInvitationDungeonRequestMessage;
