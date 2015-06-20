var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PrismFightJoinLeaveRequestMessage = function() {
  this.subAreaId = 0;
  this.join = false;
};

util.inherits(PrismFightJoinLeaveRequestMessage, BaseMessage);

PrismFightJoinLeaveRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismFightJoinLeaveRequestMessage(output);
};

PrismFightJoinLeaveRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightJoinLeaveRequestMessage(input);
};

PrismFightJoinLeaveRequestMessage.prototype.serializeAs_PrismFightJoinLeaveRequestMessage = function(param1) {
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
  } else {
    param1.writeVarShort(this.subAreaId);
    param1.writeBoolean(this.join);
    return;
  }
};

PrismFightJoinLeaveRequestMessage.prototype.deserializeAs_PrismFightJoinLeaveRequestMessage = function(param1) {
  this.subAreaId = param1.readVarUhShort();
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismFightJoinLeaveRequestMessage.subAreaId.");
  } else {
    this.join = param1.readBoolean();
    return;
  }
};

PrismFightJoinLeaveRequestMessage.prototype.getMessageId = function() {
  return 5843;
};

PrismFightJoinLeaveRequestMessage.prototype.getClassName = function() {
  return 'PrismFightJoinLeaveRequestMessage';
};

module.exports.id = 5843;
module.exports.class = PrismFightJoinLeaveRequestMessage;
module.exports.getInstance = function() {
  return new PrismFightJoinLeaveRequestMessage();
};