/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GroupMonsterStaticInformations = require('./group-monster-static-informations');
var GameRolePlayGroupMonsterInformations = require('./game-role-play-group-monster-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var GameRolePlayGroupMonsterWaveInformations = (function (_super) {
    __extends(GameRolePlayGroupMonsterWaveInformations, _super);
    function GameRolePlayGroupMonsterWaveInformations() {
        this.nbWaves = 0;
        this.alternatives = [];
        _super.call(this);
    }
    GameRolePlayGroupMonsterWaveInformations.prototype.getTypeId = function () {
        return GameRolePlayGroupMonsterWaveInformations.ID;
    };
    GameRolePlayGroupMonsterWaveInformations.prototype.reset = function () {
        this.nbWaves = 0;
        this.alternatives = [];
    };
    GameRolePlayGroupMonsterWaveInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayGroupMonsterWaveInformations(param1);
    };
    GameRolePlayGroupMonsterWaveInformations.prototype.serializeAs_GameRolePlayGroupMonsterWaveInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayGroupMonsterInformations.call(this, param1);
        if (this.nbWaves < 0) {
            throw new Error('Forbidden value (' + this.nbWaves + ') on element nbWaves.');
        }
        param1.writeByte(this.nbWaves);
        param1.writeShort(this.alternatives.length);
        var _loc2_ = 0;
        while (_loc2_ < this.alternatives.length) {
            param1.writeShort((this.alternatives[_loc2_]).getTypeId());
            (this.alternatives[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    GameRolePlayGroupMonsterWaveInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayGroupMonsterWaveInformations(param1);
    };
    GameRolePlayGroupMonsterWaveInformations.prototype.deserializeAs_GameRolePlayGroupMonsterWaveInformations = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.nbWaves = param1.readByte();
        if (this.nbWaves < 0) {
            throw new Error('Forbidden value (' + this.nbWaves + ') on element of GameRolePlayGroupMonsterWaveInformations.nbWaves.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(GroupMonsterStaticInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.alternatives.push(_loc5_);
            _loc3_++;
        }
    };
    GameRolePlayGroupMonsterWaveInformations.ID = 464;
    return GameRolePlayGroupMonsterWaveInformations;
})(GameRolePlayGroupMonsterInformations);
module.exports = GameRolePlayGroupMonsterWaveInformations;
