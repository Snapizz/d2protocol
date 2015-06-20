var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var BasicSetAwayModeRequestMessage = function() {
  this.enable = false;
  this.invisible = false;
};

util.inherits(BasicSetAwayModeRequestMessage, BaseMessage);

BasicSetAwayModeRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicSetAwayModeRequestMessage(output);
};

BasicSetAwayModeRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicSetAwayModeRequestMessage(input);
};

BasicSetAwayModeRequestMessage.prototype.serializeAs_BasicSetAwayModeRequestMessage = function(output) {
  var _box0 = 0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.enable);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.invisible);
  output.writeByte(_box0);
};

BasicSetAwayModeRequestMessage.prototype.deserializeAs_BasicSetAwayModeRequestMessage = function(input) {
  var _box0 = input.readByte();
  this.enable = BooleanByteWrapper.getFlag(_box0, 0);
  this.invisible = BooleanByteWrapper.getFlag(_box0, 1);
};

BasicSetAwayModeRequestMessage.prototype.getMessageId = function() {
  return 5665;
};

BasicSetAwayModeRequestMessage.prototype.getClassName = function() {
  return 'BasicSetAwayModeRequestMessage';
};

module.exports.id = 5665;
module.exports.class = BasicSetAwayModeRequestMessage;