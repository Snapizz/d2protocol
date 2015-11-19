/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightMinimalStats = require('./game-fight-minimal-stats');
var GameContextActorInformations = require('./../game-context-actor-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var GameFightFighterInformations = (function (_super) {
    __extends(GameFightFighterInformations, _super);
    function GameFightFighterInformations() {
        this.teamId = 2;
        this.wave = 0;
        this.alive = false;
        this.stats = new GameFightMinimalStats();
        this.previousPositions = [];
        _super.call(this);
    }
    GameFightFighterInformations.prototype.getTypeId = function () {
        return GameFightFighterInformations.ID;
    };
    GameFightFighterInformations.prototype.reset = function () {
        this.teamId = 2;
        this.wave = 0;
        this.alive = false;
        this.stats = new GameFightMinimalStats();
        this.previousPositions = [];
    };
    GameFightFighterInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightFighterInformations(param1);
    };
    GameFightFighterInformations.prototype.serializeAs_GameFightFighterInformations = function (param1) {
        _super.prototype.serializeAs_GameContextActorInformations.call(this, param1);
        param1.writeByte(this.teamId);
        if (this.wave < 0) {
            throw new Error('Forbidden value (' + this.wave + ') on element wave.');
        }
        param1.writeByte(this.wave);
        param1.writeBoolean(this.alive);
        param1.writeShort(this.stats.getTypeId());
        this.stats.serialize(param1);
        param1.writeShort(this.previousPositions.length);
        var _loc2_ = 0;
        while (_loc2_ < this.previousPositions.length) {
            if (this.previousPositions[_loc2_] < 0 || this.previousPositions[_loc2_] > 559) {
                throw new Error('Forbidden value (' + this.previousPositions[_loc2_] + ') on element 5 (starting at 1) of previousPositions.');
            }
            param1.writeVarShort(this.previousPositions[_loc2_]);
            _loc2_++;
        }
    };
    GameFightFighterInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightFighterInformations(param1);
    };
    GameFightFighterInformations.prototype.deserializeAs_GameFightFighterInformations = function (param1) {
        var _loc5_ = 0;
        _super.prototype.deserialize.call(this, param1);
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error('Forbidden value (' + this.teamId + ') on element of GameFightFighterInformations.teamId.');
        }
        this.wave = param1.readByte();
        if (this.wave < 0) {
            throw new Error('Forbidden value (' + this.wave + ') on element of GameFightFighterInformations.wave.');
        }
        this.alive = param1.readBoolean();
        var _loc2_ = param1.readUnsignedShort();
        this.stats = ProtocolTypeManager.getInstance(GameFightMinimalStats, _loc2_);
        this.stats.deserialize(param1);
        var _loc3_ = param1.readUnsignedShort();
        var _loc4_ = 0;
        while (_loc4_ < _loc3_) {
            _loc5_ = param1.readVarUhShort();
            if (_loc5_ < 0 || _loc5_ > 559) {
                throw new Error('Forbidden value (' + _loc5_ + ') on elements of previousPositions.');
            }
            this.previousPositions.push(_loc5_);
            _loc4_++;
        }
    };
    GameFightFighterInformations.ID = 143;
    return GameFightFighterInformations;
})(GameContextActorInformations);
module.exports = GameFightFighterInformations;
