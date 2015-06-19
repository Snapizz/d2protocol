var BaseMessage = require('./fight-result-fighter-list-entry.js').class,
  util = require('util');

var FightResultTaxCollectorListEntry = function() {
  this.level = 0;
  this.guildInfo;
  this.experienceForGuild = 0;
};

util.inherits(FightResultTaxCollectorListEntry, BaseMessage);

FightResultTaxCollectorListEntry.prototype.serialize = function(output) {
  this.serializeAs_FightResultTaxCollectorListEntry(output);
};

FightResultTaxCollectorListEntry.prototype.deserialize = function(input) {
  this.deserializeAs_FightResultTaxCollectorListEntry(input);
};

FightResultTaxCollectorListEntry.prototype.serializeAs_FightResultTaxCollectorListEntry = function(output) {
  this.serializeAs_FightResultFighterListEntry(output);
  if ((((this.level < 1)) || ((this.level > 200)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
  this.guildInfo.serializeAs_BasicGuildInformations(output);
  output.writeInt(this.experienceForGuild);
};

FightResultTaxCollectorListEntry.prototype.deserializeAs_FightResultTaxCollectorListEntry = function(input) {
  this.deserialize(input);
  this.level = input.readUnsignedByte();
  if ((((this.level < 1)) || ((this.level > 200)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of FightResultTaxCollectorListEntry.level.")));
  };
  this.guildInfo = new BasicGuildInformations();
  this.guildInfo.deserialize(input);
  this.experienceForGuild = input.readInt();
};

FightResultTaxCollectorListEntry.prototype.getTypeId = function() {
  return 84;
};

FightResultTaxCollectorListEntry.prototype.getClassName = function() {
  return 'FightResultTaxCollectorListEntry';
};

module.exports.id = 84;
module.exports.class = FightResultTaxCollectorListEntry;