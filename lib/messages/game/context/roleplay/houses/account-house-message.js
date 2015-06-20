var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var AccountHouseMessage = function() {
  this.houses = [];
};

util.inherits(AccountHouseMessage, BaseMessage);

AccountHouseMessage.prototype.serialize = function(output) {
  this.serializeAs_AccountHouseMessage(output);
};

AccountHouseMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AccountHouseMessage(input);
};

AccountHouseMessage.prototype.serializeAs_AccountHouseMessage = function(param1) {
  param1.writeShort(this.houses.length);
  var _loc2_ = 0;
  while (_loc2_ < this.houses.length) {
    (this.houses[_loc2_]).serializeAs_AccountHouseInformations(param1);
    _loc2_++;
  }
};

AccountHouseMessage.prototype.deserializeAs_AccountHouseMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new AccountHouseInformations();
    _loc4_.deserialize(param1);
    this.houses.push(_loc4_);
    _loc3_++;
  }
};

AccountHouseMessage.prototype.getMessageId = function() {
  return 6315;
};

AccountHouseMessage.prototype.getClassName = function() {
  return 'AccountHouseMessage';
};

module.exports.id = 6315;
module.exports.class = AccountHouseMessage;
module.exports.getInstance = function() {
  return new AccountHouseMessage();
};