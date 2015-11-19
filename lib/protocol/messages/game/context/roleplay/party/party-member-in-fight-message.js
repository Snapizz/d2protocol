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
var MapCoordinatesExtended = require('../../../../../types/game/context/map-coordinates-extended');
var PartyMemberInFightMessage = (function (_super) {
    __extends(PartyMemberInFightMessage, _super);
    function PartyMemberInFightMessage() {
        this.reason = 0;
        this.memberId = 0;
        this.memberAccountId = 0;
        this.memberName = '';
        this.fightId = 0;
        this.fightMap = new MapCoordinatesExtended();
        this.timeBeforeFightStart = 0;
        _super.call(this);
    }
    PartyMemberInFightMessage.prototype.getMessageId = function () {
        return PartyMemberInFightMessage.ID;
    };
    PartyMemberInFightMessage.prototype.reset = function () {
        this.reason = 0;
        this.memberId = 0;
        this.memberAccountId = 0;
        this.memberName = '';
        this.fightId = 0;
        this.fightMap = new MapCoordinatesExtended();
        this.timeBeforeFightStart = 0;
    };
    PartyMemberInFightMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyMemberInFightMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyMemberInFightMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyMemberInFightMessage(param1);
    };
    PartyMemberInFightMessage.prototype.serializeAs_PartyMemberInFightMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        param1.writeByte(this.reason);
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
        }
        param1.writeVarInt(this.memberId);
        if (this.memberAccountId < 0) {
            throw new Error('Forbidden value (' + this.memberAccountId + ') on element memberAccountId.');
        }
        param1.writeInt(this.memberAccountId);
        param1.writeUTF(this.memberName);
        param1.writeInt(this.fightId);
        this.fightMap.serializeAs_MapCoordinatesExtended(param1);
        param1.writeVarShort(this.timeBeforeFightStart);
    };
    PartyMemberInFightMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyMemberInFightMessage(param1);
    };
    PartyMemberInFightMessage.prototype.deserializeAs_PartyMemberInFightMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of PartyMemberInFightMessage.reason.');
        }
        this.memberId = param1.readVarUhInt();
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element of PartyMemberInFightMessage.memberId.');
        }
        this.memberAccountId = param1.readInt();
        if (this.memberAccountId < 0) {
            throw new Error('Forbidden value (' + this.memberAccountId + ') on element of PartyMemberInFightMessage.memberAccountId.');
        }
        this.memberName = param1.readUTF();
        this.fightId = param1.readInt();
        this.fightMap = new MapCoordinatesExtended();
        this.fightMap.deserialize(param1);
        this.timeBeforeFightStart = param1.readVarShort();
    };
    PartyMemberInFightMessage.ID = 6342;
    return PartyMemberInFightMessage;
})(AbstractPartyMessage);
module.exports = PartyMemberInFightMessage;
