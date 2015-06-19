var BaseMessage = require('./paddock-abandonned-informations.js').class,
  util = require('util');

var PaddockPrivateInformations = function() {
  this.guildInfo;
};

util.inherits(PaddockPrivateInformations, BaseMessage);

PaddockPrivateInformations.prototype.serialize = function(output) {
  this.serializeAs_PaddockPrivateInformations(output);
};

PaddockPrivateInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockPrivateInformations(input);
};

PaddockPrivateInformations.prototype.serializeAs_PaddockPrivateInformations = function(output) {
  this.serializeAs_PaddockAbandonnedInformations(output);
  this.guildInfo.serializeAs_GuildInformations(output);
};

PaddockPrivateInformations.prototype.deserializeAs_PaddockPrivateInformations = function(input) {
  this.deserialize(input);
  this.guildInfo = new GuildInformations();
  this.guildInfo.deserialize(input);
};

PaddockPrivateInformations.prototype.getTypeId = function() {
  return 131;
};

PaddockPrivateInformations.prototype.getClassName = function() {
  return 'PaddockPrivateInformations';
};

module.exports.id = 131;
module.exports.class = PaddockPrivateInformations;