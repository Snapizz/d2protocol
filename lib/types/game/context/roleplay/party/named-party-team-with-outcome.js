var NamedPartyTeamWithOutcome = function() {
  this.team;
  this.outcome = 0;
};



NamedPartyTeamWithOutcome.prototype.serialize = function(output) {
  this.serializeAs_NamedPartyTeamWithOutcome(output);
};

NamedPartyTeamWithOutcome.prototype.deserialize = function(input) {
  this.deserializeAs_NamedPartyTeamWithOutcome(input);
};

NamedPartyTeamWithOutcome.prototype.serializeAs_NamedPartyTeamWithOutcome = function(param1) {
  this.team.serializeAs_NamedPartyTeam(param1);
  param1.writeVarShort(this.outcome);
};

NamedPartyTeamWithOutcome.prototype.deserializeAs_NamedPartyTeamWithOutcome = function(param1) {
  this.team = new NamedPartyTeam();
  this.team.deserialize(param1);
  this.outcome = param1.readVarUhShort();
  if (this.outcome < 0) {
    throw new Error("Forbidden value (" + this.outcome + ") on element of NamedPartyTeamWithOutcome.outcome.");
  } else {
    return;
  }
};

NamedPartyTeamWithOutcome.prototype.getTypeId = function() {
  return 470;
};

NamedPartyTeamWithOutcome.prototype.getClassName = function() {
  return 'NamedPartyTeamWithOutcome';
};

module.exports.id = 470;
module.exports.class = NamedPartyTeamWithOutcome;
module.exports.getInstance = function() {
  return new NamedPartyTeamWithOutcome();
};