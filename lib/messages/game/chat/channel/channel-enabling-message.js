var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ChannelEnablingMessage = function() {
  this.channel = 0;
  this.enable = false;
};

util.inherits(ChannelEnablingMessage, BaseMessage);

ChannelEnablingMessage.prototype.serialize = function(output) {
  this.serializeAs_ChannelEnablingMessage(output);
};

ChannelEnablingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChannelEnablingMessage(input);
};

ChannelEnablingMessage.prototype.serializeAs_ChannelEnablingMessage = function(param1) {
  param1.writeByte(this.channel);
  param1.writeBoolean(this.enable);
};

ChannelEnablingMessage.prototype.deserializeAs_ChannelEnablingMessage = function(param1) {
  this.channel = param1.readByte();
  if (this.channel < 0) {
    throw new Error("Forbidden value (" + this.channel + ") on element of ChannelEnablingMessage.channel.");
  } else {
    this.enable = param1.readBoolean();
    return;
  }
};

ChannelEnablingMessage.prototype.getMessageId = function() {
  return 890;
};

ChannelEnablingMessage.prototype.getClassName = function() {
  return 'ChannelEnablingMessage';
};

module.exports.id = 890;
module.exports.class = ChannelEnablingMessage;
module.exports.getInstance = function() {
  return new ChannelEnablingMessage();
};