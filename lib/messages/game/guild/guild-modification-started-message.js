var d2com = require('d2com'),
  BaseMessage = require('./guild-modification-started-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GuildModificationStartedMessage = function() {
  this.canChangeName = false;
  this.canChangeEmblem = false;
};

util.inherits(GuildModificationStartedMessage, BaseMessage);

GuildModificationStartedMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildModificationStartedMessage(output);
};

GuildModificationStartedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildModificationStartedMessage(input);
};

GuildModificationStartedMessage.prototype.serializeAs_GuildModificationStartedMessage = function(param1) {
  var _loc2_ = 0;
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.canChangeName);
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.canChangeEmblem);
  param1.writeByte(_loc2_);
};

GuildModificationStartedMessage.prototype.deserializeAs_GuildModificationStartedMessage = function(param1) {
  var _loc2_ = param1.readByte();
  this.canChangeName = BooleanByteWrapper.getFlag(_loc2_, 0);
  this.canChangeEmblem = BooleanByteWrapper.getFlag(_loc2_, 1);
};

GuildModificationStartedMessage.prototype.getMessageId = function() {
  return 6324;
};

GuildModificationStartedMessage.prototype.getClassName = function() {
  return 'GuildModificationStartedMessage';
};

module.exports.id = 6324;
module.exports.class = GuildModificationStartedMessage;
module.exports.getInstance = function() {
  return new GuildModificationStartedMessage();
};