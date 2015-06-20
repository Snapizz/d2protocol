var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var PrismFightStateUpdateMessage = function() {
  this.state = 0;
};

util.inherits(PrismFightStateUpdateMessage, BaseMessage);

PrismFightStateUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismFightStateUpdateMessage(output);
};

PrismFightStateUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightStateUpdateMessage(input);
};

PrismFightStateUpdateMessage.prototype.serializeAs_PrismFightStateUpdateMessage = function(param1) {
  if (this.state < 0) {
    throw new Error("Forbidden value (" + this.state + ") on element state.");
  } else {
    param1.writeByte(this.state);
    return;
  }
};

PrismFightStateUpdateMessage.prototype.deserializeAs_PrismFightStateUpdateMessage = function(param1) {
  this.state = param1.readByte();
  if (this.state < 0) {
    throw new Error("Forbidden value (" + this.state + ") on element of PrismFightStateUpdateMessage.state.");
  } else {
    return;
  }
};

PrismFightStateUpdateMessage.prototype.getMessageId = function() {
  return 6040;
};

PrismFightStateUpdateMessage.prototype.getClassName = function() {
  return 'PrismFightStateUpdateMessage';
};

module.exports.id = 6040;
module.exports.class = PrismFightStateUpdateMessage;
module.exports.getInstance = function() {
  return new PrismFightStateUpdateMessage();
};