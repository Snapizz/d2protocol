var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var NotificationUpdateFlagMessage = function() {
  this.index = 0;
};

util.inherits(NotificationUpdateFlagMessage, BaseMessage);

NotificationUpdateFlagMessage.prototype.serialize = function(output) {
  this.serializeAs_NotificationUpdateFlagMessage(output);
};

NotificationUpdateFlagMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NotificationUpdateFlagMessage(input);
};

NotificationUpdateFlagMessage.prototype.serializeAs_NotificationUpdateFlagMessage = function(output) {
  if (this.index < 0) {
    throw (new Error((("Forbidden value (" + this.index) + ") on element index.")));
  };
  output.writeVarShort(this.index);
};

NotificationUpdateFlagMessage.prototype.deserializeAs_NotificationUpdateFlagMessage = function(input) {
  this.index = input.readVarUhShort();
  if (this.index < 0) {
    throw (new Error((("Forbidden value (" + this.index) + ") on element of NotificationUpdateFlagMessage.index.")));
  };
};

NotificationUpdateFlagMessage.prototype.getMessageId = function() {
  return 6090;
};

NotificationUpdateFlagMessage.prototype.getClassName = function() {
  return 'NotificationUpdateFlagMessage';
};

module.exports.id = 6090;
module.exports.class = NotificationUpdateFlagMessage;