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

AccountHouseMessage.prototype.serializeAs_AccountHouseMessage = function(output) {
  output.writeShort(this.houses.length);
  var _i1;
  while (_i1 < this.houses.length) {
    (this.houses[_i1]).serializeAs_AccountHouseInformations(output);
    _i1++;
  };
};

AccountHouseMessage.prototype.deserializeAs_AccountHouseMessage = function(input) {
  var _item1;
  var _housesLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _housesLen) {
    _item1 = new AccountHouseInformations();
    _item1.deserialize(input);
    this.houses.push(_item1);
    _i1++;
  };
};

AccountHouseMessage.prototype.getMessageId = function() {
  return 6315;
};

AccountHouseMessage.prototype.getClassName = function() {
  return 'AccountHouseMessage';
};

module.exports.id = 6315;
module.exports.class = AccountHouseMessage;