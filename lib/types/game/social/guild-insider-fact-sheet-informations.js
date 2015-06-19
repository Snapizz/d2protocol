var BaseMessage = require('./guild-fact-sheet-informations.js').class,
  util = require('util');

var GuildInsiderFactSheetInformations = function() {
  this.leaderName = "";
  this.nbConnectedMembers = 0;
  this.nbTaxCollectors = 0;
  this.lastActivity = 0;
  this.enabled = false;
};

util.inherits(GuildInsiderFactSheetInformations, BaseMessage);

GuildInsiderFactSheetInformations.prototype.serialize = function(output) {
  this.serializeAs_GuildInsiderFactSheetInformations(output);
};

GuildInsiderFactSheetInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInsiderFactSheetInformations(input);
};

GuildInsiderFactSheetInformations.prototype.serializeAs_GuildInsiderFactSheetInformations = function(output) {
  this.serializeAs_GuildFactSheetInformations(output);
  output.writeUTF(this.leaderName);
  if (this.nbConnectedMembers < 0) {
    throw (new Error((("Forbidden value (" + this.nbConnectedMembers) + ") on element nbConnectedMembers.")));
  };
  output.writeVarShort(this.nbConnectedMembers);
  if (this.nbTaxCollectors < 0) {
    throw (new Error((("Forbidden value (" + this.nbTaxCollectors) + ") on element nbTaxCollectors.")));
  };
  output.writeByte(this.nbTaxCollectors);
  if (this.lastActivity < 0) {
    throw (new Error((("Forbidden value (" + this.lastActivity) + ") on element lastActivity.")));
  };
  output.writeInt(this.lastActivity);
  output.writeBoolean(this.enabled);
};

GuildInsiderFactSheetInformations.prototype.deserializeAs_GuildInsiderFactSheetInformations = function(input) {
  this.deserialize(input);
  this.leaderName = input.readUTF();
  this.nbConnectedMembers = input.readVarUhShort();
  if (this.nbConnectedMembers < 0) {
    throw (new Error((("Forbidden value (" + this.nbConnectedMembers) + ") on element of GuildInsiderFactSheetInformations.nbConnectedMembers.")));
  };
  this.nbTaxCollectors = input.readByte();
  if (this.nbTaxCollectors < 0) {
    throw (new Error((("Forbidden value (" + this.nbTaxCollectors) + ") on element of GuildInsiderFactSheetInformations.nbTaxCollectors.")));
  };
  this.lastActivity = input.readInt();
  if (this.lastActivity < 0) {
    throw (new Error((("Forbidden value (" + this.lastActivity) + ") on element of GuildInsiderFactSheetInformations.lastActivity.")));
  };
  this.enabled = input.readBoolean();
};

GuildInsiderFactSheetInformations.prototype.getTypeId = function() {
  return 423;
};

GuildInsiderFactSheetInformations.prototype.getClassName = function() {
  return 'GuildInsiderFactSheetInformations';
};

module.exports.id = 423;
module.exports.class = GuildInsiderFactSheetInformations;