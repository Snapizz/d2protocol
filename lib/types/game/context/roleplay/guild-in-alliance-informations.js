var BaseMessage = require('./guild-informations.js').class,
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

GuildInAllianceInformations.prototype.serializeAs_GuildInAllianceInformations = function(output) {
  this.serializeAs_GuildInformations(output);
  if ((((this.guildLevel < 1)) || ((this.guildLevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.guildLevel) + ") on element guildLevel.")));
  };
  output.writeByte(this.guildLevel);
  if ((((this.nbMembers < 1)) || ((this.nbMembers > 240)))) {
    throw (new Error((("Forbidden value (" + this.nbMembers) + ") on element nbMembers.")));
  };
  output.writeByte(this.nbMembers);
  output.writeBoolean(this.enabled);
};

GuildInAllianceInformations.prototype.deserializeAs_GuildInAllianceInformations = function(input) {
  this.deserialize(input);
  this.guildLevel = input.readUnsignedByte();
  if ((((this.guildLevel < 1)) || ((this.guildLevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.guildLevel) + ") on element of GuildInAllianceInformations.guildLevel.")));
  };
  this.nbMembers = input.readUnsignedByte();
  if ((((this.nbMembers < 1)) || ((this.nbMembers > 240)))) {
    throw (new Error((("Forbidden value (" + this.nbMembers) + ") on element of GuildInAllianceInformations.nbMembers.")));
  };
  this.enabled = input.readBoolean();
};

GuildInAllianceInformations.prototype.getTypeId = function() {
  return 420;
};

GuildInAllianceInformations.prototype.getClassName = function() {
  return 'GuildInAllianceInformations';
};

module.exports.id = 420;
module.exports.class = GuildInAllianceInformations;