var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismsListMessage = function() {
  this.prisms = [];
};

util.inherits(PrismsListMessage, BaseMessage);

PrismsListMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismsListMessage(output);
};

PrismsListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismsListMessage(input);
};

PrismsListMessage.prototype.serializeAs_PrismsListMessage = function(output) {
  output.writeShort(this.prisms.length);
  var _i1 = 0;
  while (_i1 < this.prisms.length) {
    output.writeShort((this.prisms[_i1]).getTypeId());
    (this.prisms[_i1]).serialize(output);
    _i1++;
  };
};

PrismsListMessage.prototype.deserializeAs_PrismsListMessage = function(input) {
  var _id1 = 0;
  var _item1;
  var _prismsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _prismsLen) {
    _id1 = input.readUnsignedShort();
    _item1 = ProtocolTypeManager.getInstance(PrismSubareaEmptyInfo, _id1);
    _item1.deserialize(input);
    this.prisms.push(_item1);
    _i1++;
  };
};

PrismsListMessage.prototype.getMessageId = function() {
  return 6440;
};

PrismsListMessage.prototype.getClassName = function() {
  return 'PrismsListMessage';
};

module.exports.id = 6440;
module.exports.class = PrismsListMessage;