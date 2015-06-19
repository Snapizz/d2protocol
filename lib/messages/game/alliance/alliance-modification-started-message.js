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

AllianceModificationStartedMessage.prototype.serializeAs_AllianceModificationStartedMessage = function(output) {
  var _box0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.canChangeName);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.canChangeTag);
  _box0 = BooleanByteWrapper.setFlag(_box0, 2, this.canChangeEmblem);
  output.writeByte(_box0);
};

AllianceModificationStartedMessage.prototype.deserializeAs_AllianceModificationStartedMessage = function(input) {
  var _box0 = input.readByte();
  this.canChangeName = BooleanByteWrapper.getFlag(_box0, 0);
  this.canChangeTag = BooleanByteWrapper.getFlag(_box0, 1);
  this.canChangeEmblem = BooleanByteWrapper.getFlag(_box0, 2);
};

AllianceModificationStartedMessage.prototype.getMessageId = function() {
  return 6444;
};

AllianceModificationStartedMessage.prototype.getClassName = function() {
  return 'AllianceModificationStartedMessage';
};

module.exports.id = 6444;
module.exports.class = AllianceModificationStartedMessage;