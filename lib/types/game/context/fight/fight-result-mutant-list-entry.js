var BaseMessage = require('./fight-result-mutant-list-entry.js').class,
  util = require('util');

var FightResultMutantListEntry = function() {
  this.level = 0;
};

util.inherits(FightResultMutantListEntry, BaseMessage);

FightResultMutantListEntry.prototype.serialize = function(output) {
  this.serializeAs_FightResultMutantListEntry(output);
};

FightResultMutantListEntry.prototype.deserialize = function(input) {
  this.deserializeAs_FightResultMutantListEntry(input);
};

FightResultMutantListEntry.prototype.serializeAs_FightResultMutantListEntry = function(param1) {
  this.serializeAs_FightResultFighterListEntry(param1);
  if (this.level < 0) {
    throw new Error("Forbidden value (" + this.level + ") on element level.");
  } else {
    param1.writeVarShort(this.level);
    return;
  }
};

FightResultMutantListEntry.prototype.deserializeAs_FightResultMutantListEntry = function(param1) {
  this.deserialize(param1);
  this.level = param1.readVarUhShort();
  if (this.level < 0) {
    throw new Error("Forbidden value (" + this.level + ") on element of FightResultMutantListEntry.level.");
  } else {
    return;
  }
};

FightResultMutantListEntry.prototype.getTypeId = function() {
  return 216;
};

FightResultMutantListEntry.prototype.getClassName = function() {
  return 'FightResultMutantListEntry';
};

module.exports.id = 216;
module.exports.class = FightResultMutantListEntry;
module.exports.getInstance = function() {
  return new FightResultMutantListEntry();
};