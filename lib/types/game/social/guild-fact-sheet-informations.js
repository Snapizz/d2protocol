var BaseMessage = require('../context/roleplay/guild-informations.js').class,
  util = require('util');

var GuildFactSheetInformations = function() {
  this.leaderId = 0;
  this.guildLevel = 0;
  this.nbMembers = 0;
};

util.inherits(GuildFactSheetInformations, BaseMessage);

GuildFactSheetInformations.prototype.serialize = function(output) {
  this.serializeAs_GuildFactSheetInformations(output);
};

GuildFactSheetInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GuildFactSheetInformations(input);
};

GuildFactSheetInformations.prototype.serializeAs_GuildFactSheetInformations = function(output) {
  this.serializeAs_GuildInformations(output);
  if (this.leaderId < 0) {
    throw (new Error((("Forbidden value (" + this.leaderId) + ") on element leaderId.")));
  };
  output.writeVarInt(this.leaderId);
  if ((((this.guildLevel < 0)) || ((this.guildLevel > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.guildLevel) + ") on element guildLevel.")));
  };
  output.writeByte(this.guildLevel);
  if (this.nbMembers < 0) {
    throw (new Error((("Forbidden value (" + this.nbMembers) + ") on element nbMembers.")));
  };
  output.writeVarShort(this.nbMembers);
};

GuildFactSheetInformations.prototype.deserializeAs_GuildFactSheetInformations = function(input) {
  this.deserialize(input);
  this.leaderId = input.readVarUhInt();
  if (this.leaderId < 0) {
    throw (new Error((("Forbidden value (" + this.leaderId) + ") on element of GuildFactSheetInformations.leaderId.")));
  };
  this.guildLevel = input.readUnsignedByte();
  if ((((this.guildLevel < 0)) || ((this.guildLevel > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.guildLevel) + ") on element of GuildFactSheetInformations.guildLevel.")));
  };
  this.nbMembers = input.readVarUhShort();
  if (this.nbMembers < 0) {
    throw (new Error((("Forbidden value (" + this.nbMembers) + ") on element of GuildFactSheetInformations.nbMembers.")));
  };
};

GuildFactSheetInformations.prototype.getTypeId = function() {
  return 424;
};

GuildFactSheetInformations.prototype.getClassName = function() {
  return 'GuildFactSheetInformations';
};

module.exports.id = 424;
module.exports.class = GuildFactSheetInformations;