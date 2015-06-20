var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidHouseSearchMessage = function() {
  this.type = 0;
  this.genId = 0;
};

util.inherits(ExchangeBidHouseSearchMessage, BaseMessage);

ExchangeBidHouseSearchMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidHouseSearchMessage(output);
};

ExchangeBidHouseSearchMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidHouseSearchMessage(input);
};

ExchangeBidHouseSearchMessage.prototype.serializeAs_ExchangeBidHouseSearchMessage = function(param1) {
  if (this.type < 0) {
    throw new Error("Forbidden value (" + this.type + ") on element type.");
  } else {
    param1.writeVarInt(this.type);
    if (this.genId < 0) {
      throw new Error("Forbidden value (" + this.genId + ") on element genId.");
    } else {
      param1.writeVarShort(this.genId);
      return;
    }
  }
};

ExchangeBidHouseSearchMessage.prototype.deserializeAs_ExchangeBidHouseSearchMessage = function(param1) {
  this.type = param1.readVarUhInt();
  if (this.type < 0) {
    throw new Error("Forbidden value (" + this.type + ") on element of ExchangeBidHouseSearchMessage.type.");
  } else {
    this.genId = param1.readVarUhShort();
    if (this.genId < 0) {
      throw new Error("Forbidden value (" + this.genId + ") on element of ExchangeBidHouseSearchMessage.genId.");
    } else {
      return;
    }
  }
};

ExchangeBidHouseSearchMessage.prototype.getMessageId = function() {
  return 5806;
};

ExchangeBidHouseSearchMessage.prototype.getClassName = function() {
  return 'ExchangeBidHouseSearchMessage';
};

module.exports.id = 5806;
module.exports.class = ExchangeBidHouseSearchMessage;