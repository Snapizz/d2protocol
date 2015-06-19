var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ChannelEnablingMessage.prototype.serializeAs_ChannelEnablingMessage = function(output) {
  output.writeByte(this.channel);
  output.writeBoolean(this.enable);
};

ChannelEnablingMessage.prototype.deserializeAs_ChannelEnablingMessage = function(input) {
  this.channel = input.readByte();
  if (this.channel < 0) {
    throw (new Error((("Forbidden value (" + this.channel) + ") on element of ChannelEnablingMessage.channel.")));
  };
  this.enable = input.readBoolean();
};

ChannelEnablingMessage.prototype.getMessageId = function() {
  return 890;
};

ChannelEnablingMessage.prototype.getClassName = function() {
  return 'ChannelEnablingMessage';
};

module.exports.id = 890;
module.exports.class = ChannelEnablingMessage;