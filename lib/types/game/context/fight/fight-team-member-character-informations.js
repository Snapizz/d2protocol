var BaseMessage = require('./fight-team-member-informations.js').class,
  util = require('util');

var FightTeamMemberCharacterInformations = function() {
  this.name = "";
  this.level = 0;
};

util.inherits(FightTeamMemberCharacterInformations, BaseMessage);

FightTeamMemberCharacterInformations.prototype.serialize = function(output) {
  this.serializeAs_FightTeamMemberCharacterInformations(output);
};

FightTeamMemberCharacterInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightTeamMemberCharacterInformations(input);
};

FightTeamMemberCharacterInformations.prototype.serializeAs_FightTeamMemberCharacterInformations = function(output) {
  this.serializeAs_FightTeamMemberInformations(output);
  output.writeUTF(this.name);
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
};

FightTeamMemberCharacterInformations.prototype.deserializeAs_FightTeamMemberCharacterInformations = function(input) {
  this.deserialize(input);
  this.name = input.readUTF();
  this.level = input.readUnsignedByte();
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of FightTeamMemberCharacterInformations.level.")));
  };
};

FightTeamMemberCharacterInformations.prototype.getTypeId = function() {
  return 13;
};

FightTeamMemberCharacterInformations.prototype.getClassName = function() {
  return 'FightTeamMemberCharacterInformations';
};

module.exports.id = 13;
module.exports.class = FightTeamMemberCharacterInformations;