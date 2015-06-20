var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GuildCreationStartedMessage = function() {

};

util.inherits(GuildCreationStartedMessage, BaseMessage);

GuildCreationStartedMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildCreationStartedMessage(output);
};

GuildCreationStartedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildCreationStartedMessage(input);
};

GuildCreationStartedMessage.prototype.serializeAs_GuildCreationStartedMessage = function(param1) {

};

GuildCreationStartedMessage.prototype.deserializeAs_GuildCreationStartedMessage = function(param1) {

};

GuildCreationStartedMessage.prototype.getMessageId = function() {
  return 5920;
};

GuildCreationStartedMessage.prototype.getClassName = function() {
  return 'GuildCreationStartedMessage';
};

module.exports.id = 5920;
module.exports.class = GuildCreationStartedMessage;
module.exports.getInstance = function() {
  return new GuildCreationStartedMessage();
};