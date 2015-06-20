var BaseMessage = require('./abstract-fight-team-informations.js').class,
  util = require('util');

var FightTeamInformations = function() {
  this.teamMembers = [];
};

util.inherits(FightTeamInformations, BaseMessage);

FightTeamInformations.prototype.serialize = function(output) {
  this.serializeAs_FightTeamInformations(output);
};

FightTeamInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightTeamInformations(input);
};

FightTeamInformations.prototype.serializeAs_FightTeamInformations = function(output) {
  this.serializeAs_AbstractFightTeamInformations(output);
  output.writeShort(this.teamMembers.length);
  var _i1 = 0;
  while (_i1 < this.teamMembers.length) {
    output.writeShort((this.teamMembers[_i1]).getTypeId());
    (this.teamMembers[_i1]).serialize(output);
    _i1++;
  };
};

FightTeamInformations.prototype.deserializeAs_FightTeamInformations = function(input) {
  var _id1 = 0;
  var _item1;
  this.deserialize(input);
  var _teamMembersLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _teamMembersLen) {
    _id1 = input.readUnsignedShort();
    _item1 = ProtocolTypeManager.getInstance(FightTeamMemberInformations, _id1);
    _item1.deserialize(input);
    this.teamMembers.push(_item1);
    _i1++;
  };
};

FightTeamInformations.prototype.getTypeId = function() {
  return 33;
};

FightTeamInformations.prototype.getClassName = function() {
  return 'FightTeamInformations';
};

module.exports.id = 33;
module.exports.class = FightTeamInformations;