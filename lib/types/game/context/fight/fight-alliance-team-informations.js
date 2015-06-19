var BaseMessage = require('./fight-team-informations.js').class,
  util = require('util');

var FightAllianceTeamInformations = function() {
  this.relation = 0;
};

util.inherits(FightAllianceTeamInformations, BaseMessage);

FightAllianceTeamInformations.prototype.serialize = function(output) {
  this.serializeAs_FightAllianceTeamInformations(output);
};

FightAllianceTeamInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightAllianceTeamInformations(input);
};

FightAllianceTeamInformations.prototype.serializeAs_FightAllianceTeamInformations = function(output) {
  this.serializeAs_FightTeamInformations(output);
  output.writeByte(this.relation);
};

FightAllianceTeamInformations.prototype.deserializeAs_FightAllianceTeamInformations = function(input) {
  this.deserialize(input);
  this.relation = input.readByte();
  if (this.relation < 0) {
    throw (new Error((("Forbidden value (" + this.relation) + ") on element of FightAllianceTeamInformations.relation.")));
  };
};

FightAllianceTeamInformations.prototype.getTypeId = function() {
  return 439;
};

FightAllianceTeamInformations.prototype.getClassName = function() {
  return 'FightAllianceTeamInformations';
};

module.exports.id = 439;
module.exports.class = FightAllianceTeamInformations;