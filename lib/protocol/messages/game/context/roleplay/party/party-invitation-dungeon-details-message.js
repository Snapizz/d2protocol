/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PartyInvitationDetailsMessage = require('./party-invitation-details-message');
var PartyInvitationDungeonDetailsMessage = (function (_super) {
    __extends(PartyInvitationDungeonDetailsMessage, _super);
    function PartyInvitationDungeonDetailsMessage() {
        this.dungeonId = 0;
        this.playersDungeonReady = [];
        _super.call(this);
    }
    PartyInvitationDungeonDetailsMessage.prototype.getMessageId = function () {
        return PartyInvitationDungeonDetailsMessage.ID;
    };
    PartyInvitationDungeonDetailsMessage.prototype.reset = function () {
        this.dungeonId = 0;
        this.playersDungeonReady = [];
    };
    PartyInvitationDungeonDetailsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyInvitationDungeonDetailsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyInvitationDungeonDetailsMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyInvitationDungeonDetailsMessage(param1);
    };
    PartyInvitationDungeonDetailsMessage.prototype.serializeAs_PartyInvitationDungeonDetailsMessage = function (param1) {
        _super.prototype.serializeAs_PartyInvitationDetailsMessage.call(this, param1);
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        param1.writeShort(this.playersDungeonReady.length);
        var _loc2_ = 0;
        while (_loc2_ < this.playersDungeonReady.length) {
            param1.writeBoolean(this.playersDungeonReady[_loc2_]);
            _loc2_++;
        }
    };
    PartyInvitationDungeonDetailsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyInvitationDungeonDetailsMessage(param1);
    };
    PartyInvitationDungeonDetailsMessage.prototype.deserializeAs_PartyInvitationDungeonDetailsMessage = function (param1) {
        var _loc4_ = false;
        _super.prototype.deserialize.call(this, param1);
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of PartyInvitationDungeonDetailsMessage.dungeonId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readBoolean();
            this.playersDungeonReady.push(_loc4_);
            _loc3_++;
        }
    };
    PartyInvitationDungeonDetailsMessage.ID = 6262;
    return PartyInvitationDungeonDetailsMessage;
})(PartyInvitationDetailsMessage);
module.exports = PartyInvitationDungeonDetailsMessage;
