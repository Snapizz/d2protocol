/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var GameFightSpellCooldown = require('./game-fight-spell-cooldown');
var GameFightResumeSlaveInfo = (function () {
    function GameFightResumeSlaveInfo() {
        this.slaveId = 0;
        this.spellCooldowns = [];
        this.summonCount = 0;
        this.bombCount = 0;
    }
    GameFightResumeSlaveInfo.prototype.getTypeId = function () {
        return GameFightResumeSlaveInfo.ID;
    };
    GameFightResumeSlaveInfo.prototype.reset = function () {
        this.slaveId = 0;
        this.spellCooldowns = [];
        this.summonCount = 0;
        this.bombCount = 0;
    };
    GameFightResumeSlaveInfo.prototype.serialize = function (param1) {
        this.serializeAs_GameFightResumeSlaveInfo(param1);
    };
    GameFightResumeSlaveInfo.prototype.serializeAs_GameFightResumeSlaveInfo = function (param1) {
        param1.writeInt(this.slaveId);
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
    GameFightResumeSlaveInfo.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightResumeSlaveInfo(param1);
    };
    GameFightResumeSlaveInfo.prototype.deserializeAs_GameFightResumeSlaveInfo = function (param1) {
        var _loc4_ = null;
        this.slaveId = param1.readInt();
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
            throw new Error('Forbidden value (' + this.summonCount + ') on element of GameFightResumeSlaveInfo.summonCount.');
        }
        this.bombCount = param1.readByte();
        if (this.bombCount < 0) {
            throw new Error('Forbidden value (' + this.bombCount + ') on element of GameFightResumeSlaveInfo.bombCount.');
        }
    };
    GameFightResumeSlaveInfo.ID = 364;
    return GameFightResumeSlaveInfo;
})();
module.exports = GameFightResumeSlaveInfo;
