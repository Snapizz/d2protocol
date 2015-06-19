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

NamedPartyTeamWithOutcome.prototype.serializeAs_NamedPartyTeamWithOutcome = function(output) {
  this.team.serializeAs_NamedPartyTeam(output);
  output.writeVarShort(this.outcome);
};

NamedPartyTeamWithOutcome.prototype.deserializeAs_NamedPartyTeamWithOutcome = function(input) {
  this.team = new NamedPartyTeam();
  this.team.deserialize(input);
  this.outcome = input.readVarUhShort();
  if (this.outcome < 0) {
    throw (new Error((("Forbidden value (" + this.outcome) + ") on element of NamedPartyTeamWithOutcome.outcome.")));
  };
};

NamedPartyTeamWithOutcome.prototype.getTypeId = function() {
  return 470;
};

NamedPartyTeamWithOutcome.prototype.getClassName = function() {
  return 'NamedPartyTeamWithOutcome';
};

module.exports.id = 470;
module.exports.class = NamedPartyTeamWithOutcome;