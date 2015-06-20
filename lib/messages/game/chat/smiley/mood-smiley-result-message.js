var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var MoodSmileyResultMessage = function() {
  this.resultCode = 1;
  this.smileyId = 0;
};

util.inherits(MoodSmileyResultMessage, BaseMessage);

MoodSmileyResultMessage.prototype.serialize = function(output) {
  this.serializeAs_MoodSmileyResultMessage(output);
};

MoodSmileyResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MoodSmileyResultMessage(input);
};

MoodSmileyResultMessage.prototype.serializeAs_MoodSmileyResultMessage = function(param1) {
  param1.writeByte(this.resultCode);
  param1.writeByte(this.smileyId);
};

MoodSmileyResultMessage.prototype.deserializeAs_MoodSmileyResultMessage = function(param1) {
  this.resultCode = param1.readByte();
  if (this.resultCode < 0) {
    throw new Error("Forbidden value (" + this.resultCode + ") on element of MoodSmileyResultMessage.resultCode.");
  } else {
    this.smileyId = param1.readByte();
    return;
  }
};

MoodSmileyResultMessage.prototype.getMessageId = function() {
  return 6196;
};

MoodSmileyResultMessage.prototype.getClassName = function() {
  return 'MoodSmileyResultMessage';
};

module.exports.id = 6196;
module.exports.class = MoodSmileyResultMessage;
module.exports.getInstance = function() {
  return new MoodSmileyResultMessage();
};