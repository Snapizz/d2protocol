var BaseMessage = require('./fight-team-member-character-informations.js').class,
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

FightTeamMemberCharacterInformations.prototype.serializeAs_FightTeamMemberCharacterInformations = function(param1) {
  this.serializeAs_FightTeamMemberInformations(param1);
  param1.writeUTF(this.name);
  if (this.level < 0 || this.level > 255) {
    throw new Error("Forbidden value (" + this.level + ") on element level.");
  } else {
    param1.writeByte(this.level);
    return;
  }
};

FightTeamMemberCharacterInformations.prototype.deserializeAs_FightTeamMemberCharacterInformations = function(param1) {
  this.deserialize(param1);
  this.name = param1.readUTF();
  this.level = param1.readUnsignedByte();
  if (this.level < 0 || this.level > 255) {
    throw new Error("Forbidden value (" + this.level + ") on element of FightTeamMemberCharacterInformations.level.");
  } else {
    return;
  }
};

FightTeamMemberCharacterInformations.prototype.getTypeId = function() {
  return 13;
};

FightTeamMemberCharacterInformations.prototype.getClassName = function() {
  return 'FightTeamMemberCharacterInformations';
};

module.exports.id = 13;
module.exports.class = FightTeamMemberCharacterInformations;
module.exports.getInstance = function() {
  return new FightTeamMemberCharacterInformations();
};