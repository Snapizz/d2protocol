var FightResultListEntry = function() {
    this.outcome = 0;
    this.wave = 0;
    this.rewards = new FightLoot();
};

module.exports = function() {
    return new FightResultListEntry();
};

FightResultListEntry.prototype.serialize = function(output) {
    this.serializeAs_FightResultListEntry(output);
};

FightResultListEntry.prototype.deserialize = function(input) {
    this.deserializeAs_FightResultListEntry(input);
};

FightResultListEntry.prototype.serializeAs_FightResultListEntry = function(param1) {
    param1.writeVarShort(this.outcome);
    if (this.wave < 0) {
        throw new Error("Forbidden value (" + this.wave + ") on element wave.");
    } else {
        param1.writeByte(this.wave);
        this.rewards.serializeAs_FightLoot(param1);
        return;
    }
};

FightResultListEntry.prototype.deserializeAs_FightResultListEntry = function(param1) {
    this.outcome = param1.readVarUhShort();
    if (this.outcome < 0) {
        throw new Error("Forbidden value (" + this.outcome + ") on element of FightResultListEntry.outcome.");
    } else {
        this.wave = param1.readByte();
        if (this.wave < 0) {
            throw new Error("Forbidden value (" + this.wave + ") on element of FightResultListEntry.wave.");
        } else {
            this.rewards = new FightLoot();
            this.rewards.deserialize(param1);
            return;
        }
    }
};

FightResultListEntry.prototype.getTypeId = function() {
    return 16;
};

FightResultListEntry.prototype.getClassName = function() {
    return 'FightResultListEntry';
};

module.exports.id = 16;
module.exports.FightResultListEntry = FightResultListEntry;