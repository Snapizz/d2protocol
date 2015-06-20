var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectsDeletedMessage = function() {
  this.objectUID = [];
};

util.inherits(ObjectsDeletedMessage, BaseMessage);

ObjectsDeletedMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectsDeletedMessage(output);
};

ObjectsDeletedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectsDeletedMessage(input);
};

ObjectsDeletedMessage.prototype.serializeAs_ObjectsDeletedMessage = function(output) {
  output.writeShort(this.objectUID.length);
  var _i1 = 0;
  while (_i1 < this.objectUID.length) {
    if (this.objectUID[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.objectUID[_i1]) + ") on element 1 (starting at 1) of objectUID.")));
    };
    output.writeVarInt(this.objectUID[_i1]);
    _i1++;
  };
};

ObjectsDeletedMessage.prototype.deserializeAs_ObjectsDeletedMessage = function(input) {
  var _val1 = 0;
  var _objectUIDLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _objectUIDLen) {
    _val1 = input.readVarUhInt();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of objectUID.")));
    };
    this.objectUID.push(_val1);
    _i1++;
  };
};

ObjectsDeletedMessage.prototype.getMessageId = function() {
  return 6034;
};

ObjectsDeletedMessage.prototype.getClassName = function() {
  return 'ObjectsDeletedMessage';
};

module.exports.id = 6034;
module.exports.class = ObjectsDeletedMessage;