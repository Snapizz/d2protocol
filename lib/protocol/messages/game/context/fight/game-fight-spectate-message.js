/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FightDispellableEffectExtendedInformations = require('../../../../types/game/action/fight/fight-dispellable-effect-extended-informations');
var GameActionMark = require('../../../../types/game/actions/fight/game-action-mark');
var Idol = require('../../../../types/game/idol/idol');
var GameFightSpectateMessage = (function (_super) {
    __extends(GameFightSpectateMessage, _super);
    function GameFightSpectateMessage() {
        this.effects = [];
        this.marks = [];
        this.gameTurn = 0;
        this.fightStart = 0;
        this.idols = [];
        _super.call(this);
    }
    GameFightSpectateMessage.prototype.getMessageId = function () {
        return GameFightSpectateMessage.ID;
    };
    GameFightSpectateMessage.prototype.reset = function () {
        this.effects = [];
        this.marks = [];
        this.gameTurn = 0;
        this.fightStart = 0;
        this.idols = [];
    };
    GameFightSpectateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightSpectateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightSpectateMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightSpectateMessage(param1);
    };
    GameFightSpectateMessage.prototype.serializeAs_GameFightSpectateMessage = function (param1) {
        param1.writeShort(this.effects.length);
        var _loc2_ = 0;
        while (_loc2_ < this.effects.length) {
            (this.effects[_loc2_]).serializeAs_FightDispellableEffectExtendedInformations(param1);
            _loc2_++;
        }
        param1.writeShort(this.marks.length);
        var _loc3_ = 0;
        while (_loc3_ < this.marks.length) {
            (this.marks[_loc3_]).serializeAs_GameActionMark(param1);
            _loc3_++;
        }
        if (this.gameTurn < 0) {
            throw new Error('Forbidden value (' + this.gameTurn + ') on element gameTurn.');
        }
        param1.writeVarShort(this.gameTurn);
        if (this.fightStart < 0) {
            throw new Error('Forbidden value (' + this.fightStart + ') on element fightStart.');
        }
        param1.writeInt(this.fightStart);
        param1.writeShort(this.idols.length);
        var _loc4_ = 0;
        while (_loc4_ < this.idols.length) {
            (this.idols[_loc4_]).serializeAs_Idol(param1);
            _loc4_++;
        }
    };
    GameFightSpectateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightSpectateMessage(param1);
    };
    GameFightSpectateMessage.prototype.deserializeAs_GameFightSpectateMessage = function (param1) {
        var _loc8_ = null;
        var _loc9_ = null;
        var _loc10_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc8_ = new FightDispellableEffectExtendedInformations();
            _loc8_.deserialize(param1);
            this.effects.push(_loc8_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc9_ = new GameActionMark();
            _loc9_.deserialize(param1);
            this.marks.push(_loc9_);
            _loc5_++;
        }
        this.gameTurn = param1.readVarUhShort();
        if (this.gameTurn < 0) {
            throw new Error('Forbidden value (' + this.gameTurn + ') on element of GameFightSpectateMessage.gameTurn.');
        }
        this.fightStart = param1.readInt();
        if (this.fightStart < 0) {
            throw new Error('Forbidden value (' + this.fightStart + ') on element of GameFightSpectateMessage.fightStart.');
        }
        var _loc6_ = param1.readUnsignedShort();
        var _loc7_ = 0;
        while (_loc7_ < _loc6_) {
            _loc10_ = new Idol();
            _loc10_.deserialize(param1);
            this.idols.push(_loc10_);
            _loc7_++;
        }
    };
    GameFightSpectateMessage.ID = 6069;
    return GameFightSpectateMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightSpectateMessage;
