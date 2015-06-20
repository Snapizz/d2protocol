var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var MoodSmileyRequestMessage = function() {
  this.smileyId = 0;
};

util.inherits(MoodSmileyRequestMessage, BaseMessage);

MoodSmileyRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MoodSmileyRequestMessage(output);
};

MoodSmileyRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MoodSmileyRequestMessage(input);
};

MoodSmileyRequestMessage.prototype.serializeAs_MoodSmileyRequestMessage = function(param1) {
  param1.writeByte(this.smileyId);
};

MoodSmileyRequestMessage.prototype.deserializeAs_MoodSmileyRequestMessage = function(param1) {
  this.smileyId = param1.readByte();
};

MoodSmileyRequestMessage.prototype.getMessageId = function() {
  return 6192;
};

MoodSmileyRequestMessage.prototype.getClassName = function() {
  return 'MoodSmileyRequestMessage';
};

module.exports.id = 6192;
module.exports.class = MoodSmileyRequestMessage;
module.exports.getInstance = function() {
  return new MoodSmileyRequestMessage();
};