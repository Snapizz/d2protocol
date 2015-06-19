var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var BasicAckMessage = function() {
  this.seq = 0;
  this.lastPacketId = 0;
};

util.inherits(BasicAckMessage, BaseMessage);

BasicAckMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicAckMessage(output);
};

BasicAckMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicAckMessage(input);
};

BasicAckMessage.prototype.serializeAs_BasicAckMessage = function(output) {
  if (this.seq < 0) {
    throw (new Error((("Forbidden value (" + this.seq) + ") on element seq.")));
  };
  output.writeVarInt(this.seq);
  if (this.lastPacketId < 0) {
    throw (new Error((("Forbidden value (" + this.lastPacketId) + ") on element lastPacketId.")));
  };
  output.writeVarShort(this.lastPacketId);
};

BasicAckMessage.prototype.deserializeAs_BasicAckMessage = function(input) {
  this.seq = input.readVarUhInt();
  if (this.seq < 0) {
    throw (new Error((("Forbidden value (" + this.seq) + ") on element of BasicAckMessage.seq.")));
  };
  this.lastPacketId = input.readVarUhShort();
  if (this.lastPacketId < 0) {
    throw (new Error((("Forbidden value (" + this.lastPacketId) + ") on element of BasicAckMessage.lastPacketId.")));
  };
};

BasicAckMessage.prototype.getMessageId = function() {
  return 6362;
};

BasicAckMessage.prototype.getClassName = function() {
  return 'BasicAckMessage';
};

module.exports.id = 6362;
module.exports.class = BasicAckMessage;