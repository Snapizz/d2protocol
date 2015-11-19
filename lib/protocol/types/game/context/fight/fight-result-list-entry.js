/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var FightLoot = require('./fight-loot');
var FightResultListEntry = (function () {
    function FightResultListEntry() {
        this.outcome = 0;
        this.wave = 0;
        this.rewards = new FightLoot();
    }
    FightResultListEntry.prototype.getTypeId = function () {
        return FightResultListEntry.ID;
    };
    FightResultListEntry.prototype.reset = function () {
        this.outcome = 0;
        this.wave = 0;
        this.rewards = new FightLoot();
    };
    FightResultListEntry.prototype.serialize = function (param1) {
        this.serializeAs_FightResultListEntry(param1);
    };
    FightResultListEntry.prototype.serializeAs_FightResultListEntry = function (param1) {
        param1.writeVarShort(this.outcome);
        if (this.wave < 0) {
            throw new Error('Forbidden value (' + this.wave + ') on element wave.');
        }
        param1.writeByte(this.wave);
        this.rewards.serializeAs_FightLoot(param1);
    };
    FightResultListEntry.prototype.deserialize = function (param1) {
        this.deserializeAs_FightResultListEntry(param1);
    };
    FightResultListEntry.prototype.deserializeAs_FightResultListEntry = function (param1) {
        this.outcome = param1.readVarUhShort();
        if (this.outcome < 0) {
            throw new Error('Forbidden value (' + this.outcome + ') on element of FightResultListEntry.outcome.');
        }
        this.wave = param1.readByte();
        if (this.wave < 0) {
            throw new Error('Forbidden value (' + this.wave + ') on element of FightResultListEntry.wave.');
        }
        this.rewards = new FightLoot();
        this.rewards.deserialize(param1);
    };
    FightResultListEntry.ID = 16;
    return FightResultListEntry;
})();
module.exports = FightResultListEntry;
