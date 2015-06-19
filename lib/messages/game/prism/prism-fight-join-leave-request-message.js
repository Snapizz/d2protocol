var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

PrismFightJoinLeaveRequestMessage.prototype.serializeAs_PrismFightJoinLeaveRequestMessage = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  output.writeBoolean(this.join);
};

PrismFightJoinLeaveRequestMessage.prototype.deserializeAs_PrismFightJoinLeaveRequestMessage = function(input) {
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PrismFightJoinLeaveRequestMessage.subAreaId.")));
  };
  this.join = input.readBoolean();
};

PrismFightJoinLeaveRequestMessage.prototype.getMessageId = function() {
  return 5843;
};

PrismFightJoinLeaveRequestMessage.prototype.getClassName = function() {
  return 'PrismFightJoinLeaveRequestMessage';
};

module.exports.id = 5843;
module.exports.class = PrismFightJoinLeaveRequestMessage;