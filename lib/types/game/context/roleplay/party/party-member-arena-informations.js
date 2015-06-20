var PartyMemberArenaInformations = function() {
  this.rank = 0;
};



PartyMemberArenaInformations.prototype.serialize = function(output) {
  this.serializeAs_PartyMemberArenaInformations(output);
};

PartyMemberArenaInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PartyMemberArenaInformations(input);
};

PartyMemberArenaInformations.prototype.serializeAs_PartyMemberArenaInformations = function(param1) {
  this.serializeAs_PartyMemberInformations(param1);
  if (this.rank < 0 || this.rank > 2300) {
    throw new Error("Forbidden value (" + this.rank + ") on element rank.");
  } else {
    param1.writeVarShort(this.rank);
    return;
  }
};

PartyMemberArenaInformations.prototype.deserializeAs_PartyMemberArenaInformations = function(param1) {
  this.deserialize(param1);
  this.rank = param1.readVarUhShort();
  if (this.rank < 0 || this.rank > 2300) {
    throw new Error("Forbidden value (" + this.rank + ") on element of PartyMemberArenaInformations.rank.");
  } else {
    return;
  }
};

PartyMemberArenaInformations.prototype.getTypeId = function() {
  return 391;
};

PartyMemberArenaInformations.prototype.getClassName = function() {
  return 'PartyMemberArenaInformations';
};

module.exports.id = 391;
module.exports.class = PartyMemberArenaInformations;