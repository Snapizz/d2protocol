var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildPaddockBoughtMessage = function() {
  this.paddockInfo;
};

util.inherits(GuildPaddockBoughtMessage, BaseMessage);

GuildPaddockBoughtMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildPaddockBoughtMessage(output);
};

GuildPaddockBoughtMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildPaddockBoughtMessage(input);
};

GuildPaddockBoughtMessage.prototype.serializeAs_GuildPaddockBoughtMessage = function(output) {
  this.paddockInfo.serializeAs_PaddockContentInformations(output);
};

GuildPaddockBoughtMessage.prototype.deserializeAs_GuildPaddockBoughtMessage = function(input) {
  this.paddockInfo = new PaddockContentInformations();
  this.paddockInfo.deserialize(input);
};

GuildPaddockBoughtMessage.prototype.getMessageId = function() {
  return 5952;
};

GuildPaddockBoughtMessage.prototype.getClassName = function() {
  return 'GuildPaddockBoughtMessage';
};

module.exports.id = 5952;
module.exports.class = GuildPaddockBoughtMessage;