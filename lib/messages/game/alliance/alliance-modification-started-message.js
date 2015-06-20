var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceModificationStartedMessage = function() {
  this.canChangeName = false;
  this.canChangeTag = false;
  this.canChangeEmblem = false;
};

util.inherits(AllianceModificationStartedMessage, BaseMessage);

AllianceModificationStartedMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceModificationStartedMessage(output);
};

AllianceModificationStartedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceModificationStartedMessage(input);
};

AllianceModificationStartedMessage.prototype.serializeAs_AllianceModificationStartedMessage = function(param1) {
  var _loc2_ = 0;
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.canChangeName);
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.canChangeTag);
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.canChangeEmblem);
  param1.writeByte(_loc2_);
};

AllianceModificationStartedMessage.prototype.deserializeAs_AllianceModificationStartedMessage = function(param1) {
  var _loc2_ = param1.readByte();
  this.canChangeName = BooleanByteWrapper.getFlag(_loc2_, 0);
  this.canChangeTag = BooleanByteWrapper.getFlag(_loc2_, 1);
  this.canChangeEmblem = BooleanByteWrapper.getFlag(_loc2_, 2);
};

AllianceModificationStartedMessage.prototype.getMessageId = function() {
  return 6444;
};

AllianceModificationStartedMessage.prototype.getClassName = function() {
  return 'AllianceModificationStartedMessage';
};

module.exports.id = 6444;
module.exports.class = AllianceModificationStartedMessage;