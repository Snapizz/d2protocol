var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismsInfoValidMessage = function() {
  this.fights = [];
};

util.inherits(PrismsInfoValidMessage, BaseMessage);

PrismsInfoValidMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismsInfoValidMessage(output);
};

PrismsInfoValidMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismsInfoValidMessage(input);
};

PrismsInfoValidMessage.prototype.serializeAs_PrismsInfoValidMessage = function(output) {
  output.writeShort(this.fights.length);
  var _i1 = 0;
  while (_i1 < this.fights.length) {
    (this.fights[_i1]).serializeAs_PrismFightersInformation(output);
    _i1++;
  };
};

PrismsInfoValidMessage.prototype.deserializeAs_PrismsInfoValidMessage = function(input) {
  var _item1;
  var _fightsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _fightsLen) {
    _item1 = new PrismFightersInformation();
    _item1.deserialize(input);
    this.fights.push(_item1);
    _i1++;
  };
};

PrismsInfoValidMessage.prototype.getMessageId = function() {
  return 6451;
};

PrismsInfoValidMessage.prototype.getClassName = function() {
  return 'PrismsInfoValidMessage';
};

module.exports.id = 6451;
module.exports.class = PrismsInfoValidMessage;