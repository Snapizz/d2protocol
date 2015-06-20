var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChannelEnablingChangeMessage = function() {
  this.channel = 0;
  this.enable = false;
};

util.inherits(ChannelEnablingChangeMessage, BaseMessage);

ChannelEnablingChangeMessage.prototype.serialize = function(output) {
  this.serializeAs_ChannelEnablingChangeMessage(output);
};

ChannelEnablingChangeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChannelEnablingChangeMessage(input);
};

ChannelEnablingChangeMessage.prototype.serializeAs_ChannelEnablingChangeMessage = function(output) {
  param1.writeByte(this.channel);
  param1.writeBoolean(this.enable);
};

ChannelEnablingChangeMessage.prototype.deserializeAs_ChannelEnablingChangeMessage = function(input) {
  this.channel = param1.readByte();
  if (this.channel < 0) {
    throw new Error("Forbidden value (" + this.channel + ") on element of ChannelEnablingChangeMessage.channel.");
  } else {
    this.enable = param1.readBoolean();
    return;
  }
};

ChannelEnablingChangeMessage.prototype.getMessageId = function() {
  return 891;
};

ChannelEnablingChangeMessage.prototype.getClassName = function() {
  return 'ChannelEnablingChangeMessage';
};

module.exports.id = 891;
module.exports.class = ChannelEnablingChangeMessage;