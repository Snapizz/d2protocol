var BaseMessage = require('./abstract-fight-team-informations.js').class,
  util = require('util');

var FightTeamLightInformations = function() {
  this.teamMembersCount = 0;
  this.meanLevel = 0;
  this.hasFriend = false;
  this.hasGuildMember = false;
  this.hasAllianceMember = false;
  this.hasGroupMember = false;
  this.hasMyTaxCollector = false;
};

util.inherits(FightTeamLightInformations, BaseMessage);

FightTeamLightInformations.prototype.serialize = function(output) {
  this.serializeAs_FightTeamLightInformations(output);
};

FightTeamLightInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightTeamLightInformations(input);
};

FightTeamLightInformations.prototype.serializeAs_FightTeamLightInformations = function(output) {
  this.serializeAs_AbstractFightTeamInformations(output);
  var _box0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.hasFriend);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.hasGuildMember);
  _box0 = BooleanByteWrapper.setFlag(_box0, 2, this.hasAllianceMember);
  _box0 = BooleanByteWrapper.setFlag(_box0, 3, this.hasGroupMember);
  _box0 = BooleanByteWrapper.setFlag(_box0, 4, this.hasMyTaxCollector);
  output.writeByte(_box0);
  if (this.teamMembersCount < 0) {
    throw (new Error((("Forbidden value (" + this.teamMembersCount) + ") on element teamMembersCount.")));
  };
  output.writeByte(this.teamMembersCount);
  if (this.meanLevel < 0) {
    throw (new Error((("Forbidden value (" + this.meanLevel) + ") on element meanLevel.")));
  };
  output.writeVarInt(this.meanLevel);
};

FightTeamLightInformations.prototype.deserializeAs_FightTeamLightInformations = function(input) {
  this.deserialize(input);
  var _box0 = input.readByte();
  this.hasFriend = BooleanByteWrapper.getFlag(_box0, 0);
  this.hasGuildMember = BooleanByteWrapper.getFlag(_box0, 1);
  this.hasAllianceMember = BooleanByteWrapper.getFlag(_box0, 2);
  this.hasGroupMember = BooleanByteWrapper.getFlag(_box0, 3);
  this.hasMyTaxCollector = BooleanByteWrapper.getFlag(_box0, 4);
  this.teamMembersCount = input.readByte();
  if (this.teamMembersCount < 0) {
    throw (new Error((("Forbidden value (" + this.teamMembersCount) + ") on element of FightTeamLightInformations.teamMembersCount.")));
  };
  this.meanLevel = input.readVarUhInt();
  if (this.meanLevel < 0) {
    throw (new Error((("Forbidden value (" + this.meanLevel) + ") on element of FightTeamLightInformations.meanLevel.")));
  };
};

FightTeamLightInformations.prototype.getTypeId = function() {
  return 115;
};

FightTeamLightInformations.prototype.getClassName = function() {
  return 'FightTeamLightInformations';
};

module.exports.id = 115;
module.exports.class = FightTeamLightInformations;