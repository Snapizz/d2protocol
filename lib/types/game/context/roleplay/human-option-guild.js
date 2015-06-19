var BaseMessage = require('./human-option.js').class,
  util = require('util');

var HumanOptionGuild = function() {
  this.guildInformations;
};

util.inherits(HumanOptionGuild, BaseMessage);

HumanOptionGuild.prototype.serialize = function(output) {
  this.serializeAs_HumanOptionGuild(output);
};

HumanOptionGuild.prototype.deserialize = function(input) {
  this.deserializeAs_HumanOptionGuild(input);
};

HumanOptionGuild.prototype.serializeAs_HumanOptionGuild = function(output) {
  this.serializeAs_HumanOption(output);
  this.guildInformations.serializeAs_GuildInformations(output);
};

HumanOptionGuild.prototype.deserializeAs_HumanOptionGuild = function(input) {
  this.deserialize(input);
  this.guildInformations = new GuildInformations();
  this.guildInformations.deserialize(input);
};

HumanOptionGuild.prototype.getTypeId = function() {
  return 409;
};

HumanOptionGuild.prototype.getClassName = function() {
  return 'HumanOptionGuild';
};

module.exports.id = 409;
module.exports.class = HumanOptionGuild;