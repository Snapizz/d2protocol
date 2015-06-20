var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PaddockContentInformations = require('../../../types/game/paddock/paddock-content-informations.js').class;

var GuildPaddockBoughtMessage = function() {
  this.paddockInfo = new PaddockContentInformations();
};

util.inherits(GuildPaddockBoughtMessage, BaseMessage);

GuildPaddockBoughtMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildPaddockBoughtMessage(output);
};

GuildPaddockBoughtMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildPaddockBoughtMessage(input);
};

GuildPaddockBoughtMessage.prototype.serializeAs_GuildPaddockBoughtMessage = function(param1) {
  this.paddockInfo.serializeAs_PaddockContentInformations(param1);
};

GuildPaddockBoughtMessage.prototype.deserializeAs_GuildPaddockBoughtMessage = function(param1) {
  this.paddockInfo = new PaddockContentInformations();
  this.paddockInfo.deserialize(param1);
};

GuildPaddockBoughtMessage.prototype.getMessageId = function() {
  return 5952;
};

GuildPaddockBoughtMessage.prototype.getClassName = function() {
  return 'GuildPaddockBoughtMessage';
};

module.exports.id = 5952;
module.exports.class = GuildPaddockBoughtMessage;
module.exports.getInstance = function() {
  return new GuildPaddockBoughtMessage();
};