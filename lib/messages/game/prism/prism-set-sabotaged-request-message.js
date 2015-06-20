var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PrismSetSabotagedRequestMessage = function() {
  this.subAreaId = 0;
};

util.inherits(PrismSetSabotagedRequestMessage, BaseMessage);

PrismSetSabotagedRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismSetSabotagedRequestMessage(output);
};

PrismSetSabotagedRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismSetSabotagedRequestMessage(input);
};

PrismSetSabotagedRequestMessage.prototype.serializeAs_PrismSetSabotagedRequestMessage = function(param1) {
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
  } else {
    param1.writeVarShort(this.subAreaId);
    return;
  }
};

PrismSetSabotagedRequestMessage.prototype.deserializeAs_PrismSetSabotagedRequestMessage = function(param1) {
  this.subAreaId = param1.readVarUhShort();
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismSetSabotagedRequestMessage.subAreaId.");
  } else {
    return;
  }
};

PrismSetSabotagedRequestMessage.prototype.getMessageId = function() {
  return 6468;
};

PrismSetSabotagedRequestMessage.prototype.getClassName = function() {
  return 'PrismSetSabotagedRequestMessage';
};

module.exports.id = 6468;
module.exports.class = PrismSetSabotagedRequestMessage;
module.exports.getInstance = function() {
  return new PrismSetSabotagedRequestMessage();
};