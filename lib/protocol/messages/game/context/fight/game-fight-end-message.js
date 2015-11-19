/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FightResultListEntry = require('../../../../types/game/context/fight/fight-result-list-entry');
var NamedPartyTeamWithOutcome = require('../../../../types/game/context/roleplay/party/named-party-team-with-outcome');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var GameFightEndMessage = (function (_super) {
    __extends(GameFightEndMessage, _super);
    function GameFightEndMessage() {
        this.duration = 0;
        this.ageBonus = 0;
        this.lootShareLimitMalus = 0;
        this.results = [];
        this.namedPartyTeamsOutcomes = [];
        _super.call(this);
    }
    GameFightEndMessage.prototype.getMessageId = function () {
        return GameFightEndMessage.ID;
    };
    GameFightEndMessage.prototype.reset = function () {
        this.duration = 0;
        this.ageBonus = 0;
        this.lootShareLimitMalus = 0;
        this.results = [];
        this.namedPartyTeamsOutcomes = [];
    };
    GameFightEndMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightEndMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightEndMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightEndMessage(param1);
    };
    GameFightEndMessage.prototype.serializeAs_GameFightEndMessage = function (param1) {
        if (this.duration < 0) {
            throw new Error('Forbidden value (' + this.duration + ') on element duration.');
        }
        param1.writeInt(this.duration);
        param1.writeShort(this.ageBonus);
        param1.writeShort(this.lootShareLimitMalus);
        param1.writeShort(this.results.length);
        var _loc2_ = 0;
        while (_loc2_ < this.results.length) {
            param1.writeShort((this.results[_loc2_]).getTypeId());
            (this.results[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.namedPartyTeamsOutcomes.length);
        var _loc3_ = 0;
        while (_loc3_ < this.namedPartyTeamsOutcomes.length) {
            (this.namedPartyTeamsOutcomes[_loc3_]).serializeAs_NamedPartyTeamWithOutcome(param1);
            _loc3_++;
        }
    };
    GameFightEndMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightEndMessage(param1);
    };
    GameFightEndMessage.prototype.deserializeAs_GameFightEndMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = null;
        var _loc8_ = null;
        this.duration = param1.readInt();
        if (this.duration < 0) {
            throw new Error('Forbidden value (' + this.duration + ') on element of GameFightEndMessage.duration.');
        }
        this.ageBonus = param1.readShort();
        this.lootShareLimitMalus = param1.readShort();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readUnsignedShort();
            _loc7_ = ProtocolTypeManager.getInstance(FightResultListEntry, _loc6_);
            _loc7_.deserialize(param1);
            this.results.push(_loc7_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc8_ = new NamedPartyTeamWithOutcome();
            _loc8_.deserialize(param1);
            this.namedPartyTeamsOutcomes.push(_loc8_);
            _loc5_++;
        }
    };
    GameFightEndMessage.ID = 720;
    return GameFightEndMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightEndMessage;
