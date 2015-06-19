var BaseMessage = require('./fight-result-fighter-list-entry.js').class,
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

FightResultMutantListEntry.prototype.serializeAs_FightResultMutantListEntry = function(output) {
  this.serializeAs_FightResultFighterListEntry(output);
  if (this.level < 0) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeVarShort(this.level);
};

FightResultMutantListEntry.prototype.deserializeAs_FightResultMutantListEntry = function(input) {
  this.deserialize(input);
  this.level = input.readVarUhShort();
  if (this.level < 0) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of FightResultMutantListEntry.level.")));
  };
};

FightResultMutantListEntry.prototype.getTypeId = function() {
  return 216;
};

FightResultMutantListEntry.prototype.getClassName = function() {
  return 'FightResultMutantListEntry';
};

module.exports.id = 216;
module.exports.class = FightResultMutantListEntry;