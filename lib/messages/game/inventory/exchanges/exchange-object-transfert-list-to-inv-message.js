var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectTransfertListToInvMessage = function() {
  this.ids = [];
};

util.inherits(ExchangeObjectTransfertListToInvMessage, BaseMessage);

ExchangeObjectTransfertListToInvMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectTransfertListToInvMessage(output);
};

ExchangeObjectTransfertListToInvMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectTransfertListToInvMessage(input);
};

ExchangeObjectTransfertListToInvMessage.prototype.serializeAs_ExchangeObjectTransfertListToInvMessage = function(param1) {
  param1.writeShort(this.ids.length);
  var _loc2_ = 0;
  while (_loc2_ < this.ids.length) {
    if (this.ids[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.ids[_loc2_] + ") on element 1 (starting at 1) of ids.");
    } else {
      param1.writeVarInt(this.ids[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

ExchangeObjectTransfertListToInvMessage.prototype.deserializeAs_ExchangeObjectTransfertListToInvMessage = function(param1) {
  var _loc4_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readVarUhInt();
    if (_loc4_ < 0) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of ids.");
    } else {
      this.ids.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

ExchangeObjectTransfertListToInvMessage.prototype.getMessageId = function() {
  return 6039;
};

ExchangeObjectTransfertListToInvMessage.prototype.getClassName = function() {
  return 'ExchangeObjectTransfertListToInvMessage';
};

module.exports.id = 6039;
module.exports.class = ExchangeObjectTransfertListToInvMessage;