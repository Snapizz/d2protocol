var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountSetXpRatioRequestMessage = function() {
  this.xpRatio = 0;
};

util.inherits(MountSetXpRatioRequestMessage, BaseMessage);

MountSetXpRatioRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MountSetXpRatioRequestMessage(output);
};

MountSetXpRatioRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountSetXpRatioRequestMessage(input);
};

MountSetXpRatioRequestMessage.prototype.serializeAs_MountSetXpRatioRequestMessage = function(output) {
  if (this.xpRatio < 0) {
    throw (new Error((("Forbidden value (" + this.xpRatio) + ") on element xpRatio.")));
  };
  output.writeByte(this.xpRatio);
};

MountSetXpRatioRequestMessage.prototype.deserializeAs_MountSetXpRatioRequestMessage = function(input) {
  this.xpRatio = input.readByte();
  if (this.xpRatio < 0) {
    throw (new Error((("Forbidden value (" + this.xpRatio) + ") on element of MountSetXpRatioRequestMessage.xpRatio.")));
  };
};

MountSetXpRatioRequestMessage.prototype.getMessageId = function() {
  return 5989;
};

MountSetXpRatioRequestMessage.prototype.getClassName = function() {
  return 'MountSetXpRatioRequestMessage';
};

module.exports.id = 5989;
module.exports.class = MountSetXpRatioRequestMessage;