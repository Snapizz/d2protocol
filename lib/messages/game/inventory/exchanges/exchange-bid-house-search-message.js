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

ExchangeBidHouseSearchMessage.prototype.serializeAs_ExchangeBidHouseSearchMessage = function(output) {
  if (this.type < 0) {
    throw (new Error((("Forbidden value (" + this.type) + ") on element type.")));
  };
  output.writeVarInt(this.type);
  if (this.genId < 0) {
    throw (new Error((("Forbidden value (" + this.genId) + ") on element genId.")));
  };
  output.writeVarShort(this.genId);
};

ExchangeBidHouseSearchMessage.prototype.deserializeAs_ExchangeBidHouseSearchMessage = function(input) {
  this.type = input.readVarUhInt();
  if (this.type < 0) {
    throw (new Error((("Forbidden value (" + this.type) + ") on element of ExchangeBidHouseSearchMessage.type.")));
  };
  this.genId = input.readVarUhShort();
  if (this.genId < 0) {
    throw (new Error((("Forbidden value (" + this.genId) + ") on element of ExchangeBidHouseSearchMessage.genId.")));
  };
};

ExchangeBidHouseSearchMessage.prototype.getMessageId = function() {
  return 5806;
};

ExchangeBidHouseSearchMessage.prototype.getClassName = function() {
  return 'ExchangeBidHouseSearchMessage';
};

module.exports.id = 5806;
module.exports.class = ExchangeBidHouseSearchMessage;