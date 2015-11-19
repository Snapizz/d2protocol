/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightSpectateMessage = require('./game-fight-spectate-message');
var GameFightSpellCooldown = require('../../../../types/game/context/fight/game-fight-spell-cooldown');
var GameFightResumeMessage = (function (_super) {
    __extends(GameFightResumeMessage, _super);
    function GameFightResumeMessage() {
        this.spellCooldowns = [];
        this.summonCount = 0;
        this.bombCount = 0;
        _super.call(this);
    }
    GameFightResumeMessage.prototype.getMessageId = function () {
        return GameFightResumeMessage.ID;
    };
    GameFightResumeMessage.prototype.reset = function () {
        this.spellCooldowns = [];
        this.summonCount = 0;
        this.bombCount = 0;
    };
    GameFightResumeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightResumeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightResumeMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightResumeMessage(param1);
    };
    GameFightResumeMessage.prototype.serializeAs_GameFightResumeMessage = function (param1) {
        _super.prototype.serializeAs_GameFightSpectateMessage.call(this, param1);
        param1.writeShort(this.spellCooldowns.length);
        var _loc2_ = 0;
        while (_loc2_ < this.spellCooldowns.length) {
            (this.spellCooldowns[_loc2_]).serializeAs_GameFightSpellCooldown(param1);
            _loc2_++;
        }
        if (this.summonCount < 0) {
            throw new Error('Forbidden value (' + this.summonCount + ') on element summonCount.');
        }
        param1.writeByte(this.summonCount);
        if (this.bombCount < 0) {
            throw new Error('Forbidden value (' + this.bombCount + ') on element bombCount.');
        }
        param1.writeByte(this.bombCount);
    };
    GameFightResumeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightResumeMessage(param1);
    };
    GameFightResumeMessage.prototype.deserializeAs_GameFightResumeMessage = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new GameFightSpellCooldown();
            _loc4_.deserialize(param1);
            this.spellCooldowns.push(_loc4_);
            _loc3_++;
        }
        this.summonCount = param1.readByte();
        if (this.summonCount < 0) {
            throw new Error('Forbidden value (' + this.summonCount + ') on element of GameFightResumeMessage.summonCount.');
        }
        this.bombCount = param1.readByte();
        if (this.bombCount < 0) {
            throw new Error('Forbidden value (' + this.bombCount + ') on element of GameFightResumeMessage.bombCount.');
        }
    };
    GameFightResumeMessage.ID = 6067;
    return GameFightResumeMessage;
})(GameFightSpectateMessage);
module.exports = GameFightResumeMessage;
