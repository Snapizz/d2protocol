var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var StartupActionFinishedMessage = function() {
  this.success = false;
  this.actionId = 0;
  this.automaticAction = false;
};

util.inherits(StartupActionFinishedMessage, BaseMessage);

StartupActionFinishedMessage.prototype.serialize = function(output) {
  this.serializeAs_StartupActionFinishedMessage(output);
};

StartupActionFinishedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StartupActionFinishedMessage(input);
};

StartupActionFinishedMessage.prototype.serializeAs_StartupActionFinishedMessage = function(output) {
  var _loc2_ = 0;
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.success);
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.automaticAction);
  param1.writeByte(_loc2_);
  if (this.actionId < 0) {
    throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
  } else {
    param1.writeInt(this.actionId);
    return;
  }
};

StartupActionFinishedMessage.prototype.deserializeAs_StartupActionFinishedMessage = function(input) {
  var _loc2_ = param1.readByte();
  this.success = BooleanByteWrapper.getFlag(_loc2_, 0);
  this.automaticAction = BooleanByteWrapper.getFlag(_loc2_, 1);
  this.actionId = param1.readInt();
  if (this.actionId < 0) {
    throw new Error("Forbidden value (" + this.actionId + ") on element of StartupActionFinishedMessage.actionId.");
  } else {
    return;
  }
};

StartupActionFinishedMessage.prototype.getMessageId = function() {
  return 1304;
};

StartupActionFinishedMessage.prototype.getClassName = function() {
  return 'StartupActionFinishedMessage';
};

module.exports.id = 1304;
module.exports.class = StartupActionFinishedMessage;