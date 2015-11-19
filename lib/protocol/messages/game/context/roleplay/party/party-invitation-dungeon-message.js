/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PartyInvitationMessage = require('./party-invitation-message');
var PartyInvitationDungeonMessage = (function (_super) {
    __extends(PartyInvitationDungeonMessage, _super);
    function PartyInvitationDungeonMessage() {
        this.dungeonId = 0;
        _super.call(this);
    }
    PartyInvitationDungeonMessage.prototype.getMessageId = function () {
        return PartyInvitationDungeonMessage.ID;
    };
    PartyInvitationDungeonMessage.prototype.reset = function () {
        this.dungeonId = 0;
    };
    PartyInvitationDungeonMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyInvitationDungeonMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyInvitationDungeonMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyInvitationDungeonMessage(param1);
    };
    PartyInvitationDungeonMessage.prototype.serializeAs_PartyInvitationDungeonMessage = function (param1) {
        _super.prototype.serializeAs_PartyInvitationMessage.call(this, param1);
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
    };
    PartyInvitationDungeonMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyInvitationDungeonMessage(param1);
    };
    PartyInvitationDungeonMessage.prototype.deserializeAs_PartyInvitationDungeonMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of PartyInvitationDungeonMessage.dungeonId.');
        }
    };
    PartyInvitationDungeonMessage.ID = 6244;
    return PartyInvitationDungeonMessage;
})(PartyInvitationMessage);
module.exports = PartyInvitationDungeonMessage;
