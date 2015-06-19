var BaseMessage = require('../../social/abstract-social-group-infos.js').class,
  util = require('util');

var BasicGuildInformations = function() {
  this.guildId = 0;
  this.guildName = "";
};

util.inherits(BasicGuildInformations, BaseMessage);

BasicGuildInformations.prototype.serialize = function(output) {
  this.serializeAs_BasicGuildInformations(output);
};

BasicGuildInformations.prototype.deserialize = function(input) {
  this.deserializeAs_BasicGuildInformations(input);
};

BasicGuildInformations.prototype.serializeAs_BasicGuildInformations = function(output) {
  this.serializeAs_AbstractSocialGroupInfos(output);
  if (this.guildId < 0) {
    throw (new Error((("Forbidden value (" + this.guildId) + ") on element guildId.")));
  };
  output.writeVarInt(this.guildId);
  output.writeUTF(this.guildName);
};

BasicGuildInformations.prototype.deserializeAs_BasicGuildInformations = function(input) {
  this.deserialize(input);
  this.guildId = input.readVarUhInt();
  if (this.guildId < 0) {
    throw (new Error((("Forbidden value (" + this.guildId) + ") on element of BasicGuildInformations.guildId.")));
  };
  this.guildName = input.readUTF();
};

BasicGuildInformations.prototype.getTypeId = function() {
  return 365;
};

BasicGuildInformations.prototype.getClassName = function() {
  return 'BasicGuildInformations';
};

module.exports.id = 365;
module.exports.class = BasicGuildInformations;