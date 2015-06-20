var BaseMessage = require('./guild-insider-fact-sheet-informations.js').class,
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

GuildInsiderFactSheetInformations.prototype.serializeAs_GuildInsiderFactSheetInformations = function(param1) {
  this.serializeAs_GuildFactSheetInformations(param1);
  param1.writeUTF(this.leaderName);
  if (this.nbConnectedMembers < 0) {
    throw new Error("Forbidden value (" + this.nbConnectedMembers + ") on element nbConnectedMembers.");
  } else {
    param1.writeVarShort(this.nbConnectedMembers);
    if (this.nbTaxCollectors < 0) {
      throw new Error("Forbidden value (" + this.nbTaxCollectors + ") on element nbTaxCollectors.");
    } else {
      param1.writeByte(this.nbTaxCollectors);
      if (this.lastActivity < 0) {
        throw new Error("Forbidden value (" + this.lastActivity + ") on element lastActivity.");
      } else {
        param1.writeInt(this.lastActivity);
        param1.writeBoolean(this.enabled);
        return;
      }
    }
  }
};

GuildInsiderFactSheetInformations.prototype.deserializeAs_GuildInsiderFactSheetInformations = function(param1) {
  this.deserialize(param1);
  this.leaderName = param1.readUTF();
  this.nbConnectedMembers = param1.readVarUhShort();
  if (this.nbConnectedMembers < 0) {
    throw new Error("Forbidden value (" + this.nbConnectedMembers + ") on element of GuildInsiderFactSheetInformations.nbConnectedMembers.");
  } else {
    this.nbTaxCollectors = param1.readByte();
    if (this.nbTaxCollectors < 0) {
      throw new Error("Forbidden value (" + this.nbTaxCollectors + ") on element of GuildInsiderFactSheetInformations.nbTaxCollectors.");
    } else {
      this.lastActivity = param1.readInt();
      if (this.lastActivity < 0) {
        throw new Error("Forbidden value (" + this.lastActivity + ") on element of GuildInsiderFactSheetInformations.lastActivity.");
      } else {
        this.enabled = param1.readBoolean();
        return;
      }
    }
  }
};

GuildInsiderFactSheetInformations.prototype.getTypeId = function() {
  return 423;
};

GuildInsiderFactSheetInformations.prototype.getClassName = function() {
  return 'GuildInsiderFactSheetInformations';
};

module.exports.id = 423;
module.exports.class = GuildInsiderFactSheetInformations;
module.exports.getInstance = function() {
  return new GuildInsiderFactSheetInformations();
};