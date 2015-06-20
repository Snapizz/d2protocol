var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectGroundRemovedMultipleMessage = function() {
  this.cells = [];
};

util.inherits(ObjectGroundRemovedMultipleMessage, BaseMessage);

ObjectGroundRemovedMultipleMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectGroundRemovedMultipleMessage(output);
};

ObjectGroundRemovedMultipleMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectGroundRemovedMultipleMessage(input);
};

ObjectGroundRemovedMultipleMessage.prototype.serializeAs_ObjectGroundRemovedMultipleMessage = function(output) {
  output.writeShort(this.cells.length);
  var _i1 = 0;
  while (_i1 < this.cells.length) {
    if ((((this.cells[_i1] < 0)) || ((this.cells[_i1] > 559)))) {
      throw (new Error((("Forbidden value (" + this.cells[_i1]) + ") on element 1 (starting at 1) of cells.")));
    };
    output.writeVarShort(this.cells[_i1]);
    _i1++;
  };
};

ObjectGroundRemovedMultipleMessage.prototype.deserializeAs_ObjectGroundRemovedMultipleMessage = function(input) {
  var _val1 = 0;
  var _cellsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _cellsLen) {
    _val1 = input.readVarUhShort();
    if ((((_val1 < 0)) || ((_val1 > 559)))) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of cells.")));
    };
    this.cells.push(_val1);
    _i1++;
  };
};

ObjectGroundRemovedMultipleMessage.prototype.getMessageId = function() {
  return 5944;
};

ObjectGroundRemovedMultipleMessage.prototype.getClassName = function() {
  return 'ObjectGroundRemovedMultipleMessage';
};

module.exports.id = 5944;
module.exports.class = ObjectGroundRemovedMultipleMessage;