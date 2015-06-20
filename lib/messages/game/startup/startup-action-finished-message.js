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
  var _box0 = 0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.success);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.automaticAction);
  output.writeByte(_box0);
  if (this.actionId < 0) {
    throw (new Error((("Forbidden value (" + this.actionId) + ") on element actionId.")));
  };
  output.writeInt(this.actionId);
};

StartupActionFinishedMessage.prototype.deserializeAs_StartupActionFinishedMessage = function(input) {
  var _box0 = input.readByte();
  this.success = BooleanByteWrapper.getFlag(_box0, 0);
  this.automaticAction = BooleanByteWrapper.getFlag(_box0, 1);
  this.actionId = input.readInt();
  if (this.actionId < 0) {
    throw (new Error((("Forbidden value (" + this.actionId) + ") on element of StartupActionFinishedMessage.actionId.")));
  };
};

StartupActionFinishedMessage.prototype.getMessageId = function() {
  return 1304;
};

StartupActionFinishedMessage.prototype.getClassName = function() {
  return 'StartupActionFinishedMessage';
};

module.exports.id = 1304;
module.exports.class = StartupActionFinishedMessage;