var BaseMessage = require('./fight-team-member-informations.js').class,
  util = require('util');

var FightTeamMemberTaxCollectorInformations = function() {
  this.firstNameId = 0;
  this.lastNameId = 0;
  this.level = 0;
  this.guildId = 0;
  this.uid = 0;
};

util.inherits(FightTeamMemberTaxCollectorInformations, BaseMessage);

FightTeamMemberTaxCollectorInformations.prototype.serialize = function(output) {
  this.serializeAs_FightTeamMemberTaxCollectorInformations(output);
};

FightTeamMemberTaxCollectorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightTeamMemberTaxCollectorInformations(input);
};

FightTeamMemberTaxCollectorInformations.prototype.serializeAs_FightTeamMemberTaxCollectorInformations = function(output) {
  this.serializeAs_FightTeamMemberInformations(output);
  if (this.firstNameId < 0) {
    throw (new Error((("Forbidden value (" + this.firstNameId) + ") on element firstNameId.")));
  };
  output.writeVarShort(this.firstNameId);
  if (this.lastNameId < 0) {
    throw (new Error((("Forbidden value (" + this.lastNameId) + ") on element lastNameId.")));
  };
  output.writeVarShort(this.lastNameId);
  if ((((this.level < 1)) || ((this.level > 200)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
  if (this.guildId < 0) {
    throw (new Error((("Forbidden value (" + this.guildId) + ") on element guildId.")));
  };
  output.writeVarInt(this.guildId);
  if (this.uid < 0) {
    throw (new Error((("Forbidden value (" + this.uid) + ") on element uid.")));
  };
  output.writeVarInt(this.uid);
};

FightTeamMemberTaxCollectorInformations.prototype.deserializeAs_FightTeamMemberTaxCollectorInformations = function(input) {
  this.deserialize(input);
  this.firstNameId = input.readVarUhShort();
  if (this.firstNameId < 0) {
    throw (new Error((("Forbidden value (" + this.firstNameId) + ") on element of FightTeamMemberTaxCollectorInformations.firstNameId.")));
  };
  this.lastNameId = input.readVarUhShort();
  if (this.lastNameId < 0) {
    throw (new Error((("Forbidden value (" + this.lastNameId) + ") on element of FightTeamMemberTaxCollectorInformations.lastNameId.")));
  };
  this.level = input.readUnsignedByte();
  if ((((this.level < 1)) || ((this.level > 200)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of FightTeamMemberTaxCollectorInformations.level.")));
  };
  this.guildId = input.readVarUhInt();
  if (this.guildId < 0) {
    throw (new Error((("Forbidden value (" + this.guildId) + ") on element of FightTeamMemberTaxCollectorInformations.guildId.")));
  };
  this.uid = input.readVarUhInt();
  if (this.uid < 0) {
    throw (new Error((("Forbidden value (" + this.uid) + ") on element of FightTeamMemberTaxCollectorInformations.uid.")));
  };
};

FightTeamMemberTaxCollectorInformations.prototype.getTypeId = function() {
  return 177;
};

FightTeamMemberTaxCollectorInformations.prototype.getClassName = function() {
  return 'FightTeamMemberTaxCollectorInformations';
};

module.exports.id = 177;
module.exports.class = FightTeamMemberTaxCollectorInformations;