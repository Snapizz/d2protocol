var BaseMessage = require('./fight-result-list-entry.js').class,
  util = require('util');

var FightResultFighterListEntry = function() {
  this.id = 0;
  this.alive = false;
};

util.inherits(FightResultFighterListEntry, BaseMessage);

FightResultFighterListEntry.prototype.serialize = function(output) {
  this.serializeAs_FightResultFighterListEntry(output);
};

FightResultFighterListEntry.prototype.deserialize = function(input) {
  this.deserializeAs_FightResultFighterListEntry(input);
};

FightResultFighterListEntry.prototype.serializeAs_FightResultFighterListEntry = function(output) {
  this.serializeAs_FightResultListEntry(output);
  output.writeInt(this.id);
  output.writeBoolean(this.alive);
};

FightResultFighterListEntry.prototype.deserializeAs_FightResultFighterListEntry = function(input) {
  this.deserialize(input);
  this.id = input.readInt();
  this.alive = input.readBoolean();
};

FightResultFighterListEntry.prototype.getTypeId = function() {
  return 189;
};

FightResultFighterListEntry.prototype.getClassName = function() {
  return 'FightResultFighterListEntry';
};

module.exports.id = 189;
module.exports.class = FightResultFighterListEntry;