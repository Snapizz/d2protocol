var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IgnoredListMessage = function() {
  this.ignoredList = [];
};

util.inherits(IgnoredListMessage, BaseMessage);

IgnoredListMessage.prototype.serialize = function(output) {
  this.serializeAs_IgnoredListMessage(output);
};

IgnoredListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IgnoredListMessage(input);
};

IgnoredListMessage.prototype.serializeAs_IgnoredListMessage = function(output) {
  output.writeShort(this.ignoredList.length);
  var _i1;
  while (_i1 < this.ignoredList.length) {
    output.writeShort((this.ignoredList[_i1]).getTypeId());
    (this.ignoredList[_i1]).serialize(output);
    _i1++;
  };
};

IgnoredListMessage.prototype.deserializeAs_IgnoredListMessage = function(input) {
  var _id1;
  var _item1;
  var _ignoredListLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _ignoredListLen) {
    _id1 = input.readUnsignedShort();
    _item1 = ProtocolTypeManager.getInstance(IgnoredInformations, _id1);
    _item1.deserialize(input);
    this.ignoredList.push(_item1);
    _i1++;
  };
};

IgnoredListMessage.prototype.getMessageId = function() {
  return 5674;
};

IgnoredListMessage.prototype.getClassName = function() {
  return 'IgnoredListMessage';
};

module.exports.id = 5674;
module.exports.class = IgnoredListMessage;