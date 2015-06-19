var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidHouseBuyMessage = function() {
  this.uid = 0;
  this.qty = 0;
  this.price = 0;
};

util.inherits(ExchangeBidHouseBuyMessage, BaseMessage);

ExchangeBidHouseBuyMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidHouseBuyMessage(output);
};

ExchangeBidHouseBuyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidHouseBuyMessage(input);
};

ExchangeBidHouseBuyMessage.prototype.serializeAs_ExchangeBidHouseBuyMessage = function(output) {
  if (this.uid < 0) {
    throw (new Error((("Forbidden value (" + this.uid) + ") on element uid.")));
  };
  output.writeVarInt(this.uid);
  if (this.qty < 0) {
    throw (new Error((("Forbidden value (" + this.qty) + ") on element qty.")));
  };
  output.writeVarInt(this.qty);
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element price.")));
  };
  output.writeVarInt(this.price);
};

ExchangeBidHouseBuyMessage.prototype.deserializeAs_ExchangeBidHouseBuyMessage = function(input) {
  this.uid = input.readVarUhInt();
  if (this.uid < 0) {
    throw (new Error((("Forbidden value (" + this.uid) + ") on element of ExchangeBidHouseBuyMessage.uid.")));
  };
  this.qty = input.readVarUhInt();
  if (this.qty < 0) {
    throw (new Error((("Forbidden value (" + this.qty) + ") on element of ExchangeBidHouseBuyMessage.qty.")));
  };
  this.price = input.readVarUhInt();
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element of ExchangeBidHouseBuyMessage.price.")));
  };
};

ExchangeBidHouseBuyMessage.prototype.getMessageId = function() {
  return 5804;
};

ExchangeBidHouseBuyMessage.prototype.getClassName = function() {
  return 'ExchangeBidHouseBuyMessage';
};

module.exports.id = 5804;
module.exports.class = ExchangeBidHouseBuyMessage;