var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

BasicAckMessage.prototype.serializeAs_BasicAckMessage = function(param1) {
  if (this.seq < 0) {
    throw new Error("Forbidden value (" + this.seq + ") on element seq.");
  } else {
    param1.writeVarInt(this.seq);
    if (this.lastPacketId < 0) {
      throw new Error("Forbidden value (" + this.lastPacketId + ") on element lastPacketId.");
    } else {
      param1.writeVarShort(this.lastPacketId);
      return;
    }
  }
};

BasicAckMessage.prototype.deserializeAs_BasicAckMessage = function(param1) {
  this.seq = param1.readVarUhInt();
  if (this.seq < 0) {
    throw new Error("Forbidden value (" + this.seq + ") on element of BasicAckMessage.seq.");
  } else {
    this.lastPacketId = param1.readVarUhShort();
    if (this.lastPacketId < 0) {
      throw new Error("Forbidden value (" + this.lastPacketId + ") on element of BasicAckMessage.lastPacketId.");
    } else {
      return;
    }
  }
};

BasicAckMessage.prototype.getMessageId = function() {
  return 6362;
};

BasicAckMessage.prototype.getClassName = function() {
  return 'BasicAckMessage';
};

module.exports.id = 6362;
module.exports.class = BasicAckMessage;
module.exports.getInstance = function() {
  return new BasicAckMessage();
};