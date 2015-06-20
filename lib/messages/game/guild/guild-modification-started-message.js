var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GuildModificationStartedMessage.prototype.serializeAs_GuildModificationStartedMessage = function(output) {
  var _box0 = 0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.canChangeName);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.canChangeEmblem);
  output.writeByte(_box0);
};

GuildModificationStartedMessage.prototype.deserializeAs_GuildModificationStartedMessage = function(input) {
  var _box0 = input.readByte();
  this.canChangeName = BooleanByteWrapper.getFlag(_box0, 0);
  this.canChangeEmblem = BooleanByteWrapper.getFlag(_box0, 1);
};

GuildModificationStartedMessage.prototype.getMessageId = function() {
  return 6324;
};

GuildModificationStartedMessage.prototype.getClassName = function() {
  return 'GuildModificationStartedMessage';
};

module.exports.id = 6324;
module.exports.class = GuildModificationStartedMessage;