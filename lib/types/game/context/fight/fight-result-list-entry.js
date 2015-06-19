var FightResultListEntry = function() {
  this.outcome = 0;
  this.wave = 0;
  this.rewards;
};



FightResultListEntry.prototype.serialize = function(output) {
  this.serializeAs_FightResultListEntry(output);
};

FightResultListEntry.prototype.deserialize = function(input) {
  this.deserializeAs_FightResultListEntry(input);
};

FightResultListEntry.prototype.serializeAs_FightResultListEntry = function(output) {
  output.writeVarShort(this.outcome);
  if (this.wave < 0) {
    throw (new Error((("Forbidden value (" + this.wave) + ") on element wave.")));
  };
  output.writeByte(this.wave);
  this.rewards.serializeAs_FightLoot(output);
};

FightResultListEntry.prototype.deserializeAs_FightResultListEntry = function(input) {
  this.outcome = input.readVarUhShort();
  if (this.outcome < 0) {
    throw (new Error((("Forbidden value (" + this.outcome) + ") on element of FightResultListEntry.outcome.")));
  };
  this.wave = input.readByte();
  if (this.wave < 0) {
    throw (new Error((("Forbidden value (" + this.wave) + ") on element of FightResultListEntry.wave.")));
  };
  this.rewards = new FightLoot();
  this.rewards.deserialize(input);
};

FightResultListEntry.prototype.getTypeId = function() {
  return 16;
};

FightResultListEntry.prototype.getClassName = function() {
  return 'FightResultListEntry';
};

module.exports.id = 16;
module.exports.class = FightResultListEntry;