var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountXpRatioMessage = function() {
  this.ratio = 0;
};

util.inherits(MountXpRatioMessage, BaseMessage);

MountXpRatioMessage.prototype.serialize = function(output) {
  this.serializeAs_MountXpRatioMessage(output);
};

MountXpRatioMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountXpRatioMessage(input);
};

MountXpRatioMessage.prototype.serializeAs_MountXpRatioMessage = function(output) {
  if (this.ratio < 0) {
    throw (new Error((("Forbidden value (" + this.ratio) + ") on element ratio.")));
  };
  output.writeByte(this.ratio);
};

MountXpRatioMessage.prototype.deserializeAs_MountXpRatioMessage = function(input) {
  this.ratio = input.readByte();
  if (this.ratio < 0) {
    throw (new Error((("Forbidden value (" + this.ratio) + ") on element of MountXpRatioMessage.ratio.")));
  };
};

MountXpRatioMessage.prototype.getMessageId = function() {
  return 5970;
};

MountXpRatioMessage.prototype.getClassName = function() {
  return 'MountXpRatioMessage';
};

module.exports.id = 5970;
module.exports.class = MountXpRatioMessage;