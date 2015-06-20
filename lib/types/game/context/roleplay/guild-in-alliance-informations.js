var BaseMessage = require('./guild-in-alliance-informations.js').class,
  util = require('util');

var GuildInAllianceInformations = function() {
  this.guildLevel = 0;
  this.nbMembers = 0;
  this.enabled = false;
};

util.inherits(GuildInAllianceInformations, BaseMessage);

GuildInAllianceInformations.prototype.serialize = function(output) {
  this.serializeAs_GuildInAllianceInformations(output);
};

GuildInAllianceInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInAllianceInformations(input);
};

GuildInAllianceInformations.prototype.serializeAs_GuildInAllianceInformations = function(param1) {
  this.serializeAs_GuildInformations(param1);
  if (this.guildLevel < 1 || this.guildLevel > 200) {
    throw new Error("Forbidden value (" + this.guildLevel + ") on element guildLevel.");
  } else {
    param1.writeByte(this.guildLevel);
    if (this.nbMembers < 1 || this.nbMembers > 240) {
      throw new Error("Forbidden value (" + this.nbMembers + ") on element nbMembers.");
    } else {
      param1.writeByte(this.nbMembers);
      param1.writeBoolean(this.enabled);
      return;
    }
  }
};

GuildInAllianceInformations.prototype.deserializeAs_GuildInAllianceInformations = function(param1) {
  this.deserialize(param1);
  this.guildLevel = param1.readUnsignedByte();
  if (this.guildLevel < 1 || this.guildLevel > 200) {
    throw new Error("Forbidden value (" + this.guildLevel + ") on element of GuildInAllianceInformations.guildLevel.");
  } else {
    this.nbMembers = param1.readUnsignedByte();
    if (this.nbMembers < 1 || this.nbMembers > 240) {
      throw new Error("Forbidden value (" + this.nbMembers + ") on element of GuildInAllianceInformations.nbMembers.");
    } else {
      this.enabled = param1.readBoolean();
      return;
    }
  }
};

GuildInAllianceInformations.prototype.getTypeId = function() {
  return 420;
};

GuildInAllianceInformations.prototype.getClassName = function() {
  return 'GuildInAllianceInformations';
};

module.exports.id = 420;
module.exports.class = GuildInAllianceInformations;
module.exports.getInstance = function() {
  return new GuildInAllianceInformations();
};