var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DebugHighlightCellsMessage = function() {
  this.color = 0;
  this.cells = [];
};

util.inherits(DebugHighlightCellsMessage, BaseMessage);

DebugHighlightCellsMessage.prototype.serialize = function(output) {
  this.serializeAs_DebugHighlightCellsMessage(output);
};

DebugHighlightCellsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DebugHighlightCellsMessage(input);
};

DebugHighlightCellsMessage.prototype.serializeAs_DebugHighlightCellsMessage = function(output) {
  output.writeInt(this.color);
  output.writeShort(this.cells.length);
  var _i2 = 0;
  while (_i2 < this.cells.length) {
    if ((((this.cells[_i2] < 0)) || ((this.cells[_i2] > 559)))) {
      throw (new Error((("Forbidden value (" + this.cells[_i2]) + ") on element 2 (starting at 1) of cells.")));
    };
    output.writeVarShort(this.cells[_i2]);
    _i2++;
  };
};

DebugHighlightCellsMessage.prototype.deserializeAs_DebugHighlightCellsMessage = function(input) {
  var _val2 = 0;
  this.color = input.readInt();
  var _cellsLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _cellsLen) {
    _val2 = input.readVarUhShort();
    if ((((_val2 < 0)) || ((_val2 > 559)))) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of cells.")));
    };
    this.cells.push(_val2);
    _i2++;
  };
};

DebugHighlightCellsMessage.prototype.getMessageId = function() {
  return 2001;
};

DebugHighlightCellsMessage.prototype.getClassName = function() {
  return 'DebugHighlightCellsMessage';
};

module.exports.id = 2001;
module.exports.class = DebugHighlightCellsMessage;