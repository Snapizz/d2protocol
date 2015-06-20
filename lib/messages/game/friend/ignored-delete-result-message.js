var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IgnoredDeleteResultMessage = function() {
  this.success = false;
  this.name = "";
  this.session = false;
};

util.inherits(IgnoredDeleteResultMessage, BaseMessage);

IgnoredDeleteResultMessage.prototype.serialize = function(output) {
  this.serializeAs_IgnoredDeleteResultMessage(output);
};

IgnoredDeleteResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IgnoredDeleteResultMessage(input);
};

IgnoredDeleteResultMessage.prototype.serializeAs_IgnoredDeleteResultMessage = function(output) {
  var _box0 = 0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.success);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.session);
  output.writeByte(_box0);
  output.writeUTF(this.name);
};

IgnoredDeleteResultMessage.prototype.deserializeAs_IgnoredDeleteResultMessage = function(input) {
  var _box0 = input.readByte();
  this.success = BooleanByteWrapper.getFlag(_box0, 0);
  this.session = BooleanByteWrapper.getFlag(_box0, 1);
  this.name = input.readUTF();
};

IgnoredDeleteResultMessage.prototype.getMessageId = function() {
  return 5677;
};

IgnoredDeleteResultMessage.prototype.getClassName = function() {
  return 'IgnoredDeleteResultMessage';
};

module.exports.id = 5677;
module.exports.class = IgnoredDeleteResultMessage;