var BaseMessage = require('./basic-guild-informations.js').class,
  util = require('util');

var GuildInformations = function() {
  this.guildEmblem;
};

util.inherits(GuildInformations, BaseMessage);

GuildInformations.prototype.serialize = function(output) {
  this.serializeAs_GuildInformations(output);
};

GuildInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInformations(input);
};

GuildInformations.prototype.serializeAs_GuildInformations = function(output) {
  this.serializeAs_BasicGuildInformations(output);
  this.guildEmblem.serializeAs_GuildEmblem(output);
};

GuildInformations.prototype.deserializeAs_GuildInformations = function(input) {
  this.deserialize(input);
  this.guildEmblem = new GuildEmblem();
  this.guildEmblem.deserialize(input);
};

GuildInformations.prototype.getTypeId = function() {
  return 127;
};

GuildInformations.prototype.getClassName = function() {
  return 'GuildInformations';
};

module.exports.id = 127;
module.exports.class = GuildInformations;