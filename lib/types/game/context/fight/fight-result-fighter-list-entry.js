var FightResultFighterListEntry = function() {
    this.id = 0;
    this.alive = false;
};

require('util').inherits(FightResultFighterListEntry, require('./fight-result-list-entry.js').class);

FightResultFighterListEntry.prototype.serialize = function(output) {
    this.serializeAs_FightResultFighterListEntry(output);
};

FightResultFighterListEntry.prototype.deserialize = function(input) {
    this.deserializeAs_FightResultFighterListEntry(input);
};

FightResultFighterListEntry.prototype.serializeAs_FightResultFighterListEntry = function(param1) {
    this.serializeAs_FightResultListEntry(param1);
    param1.writeInt(this.id);
    param1.writeBoolean(this.alive);
};

FightResultFighterListEntry.prototype.deserializeAs_FightResultFighterListEntry = function(param1) {
    this.deserializeAs_FightResultListEntry(param1);
    this.id = param1.readInt();
    this.alive = param1.readBoolean();
};

FightResultFighterListEntry.prototype.getTypeId = function() {
    return 189;
};

FightResultFighterListEntry.prototype.getClassName = function() {
    return 'FightResultFighterListEntry';
};

module.exports.id = 189;
module.exports.class = FightResultFighterListEntry;
module.exports.getInstance = function() {
    return new FightResultFighterListEntry;
};