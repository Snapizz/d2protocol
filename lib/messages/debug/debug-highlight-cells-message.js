var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

DebugHighlightCellsMessage.prototype.serializeAs_DebugHighlightCellsMessage = function(param1) {
  param1.writeInt(this.color);
  param1.writeShort(this.cells.length);
  var _loc2_ = 0;
  while (_loc2_ < this.cells.length) {
    if (this.cells[_loc2_] < 0 || this.cells[_loc2_] > 559) {
      throw new Error("Forbidden value (" + this.cells[_loc2_] + ") on element 2 (starting at 1) of cells.");
    } else {
      param1.writeVarShort(this.cells[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

DebugHighlightCellsMessage.prototype.deserializeAs_DebugHighlightCellsMessage = function(param1) {
  var _loc4_ = 0;
  this.color = param1.readInt();
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readVarUhShort();
    if (_loc4_ < 0 || _loc4_ > 559) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of cells.");
    } else {
      this.cells.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

DebugHighlightCellsMessage.prototype.getMessageId = function() {
  return 2001;
};

DebugHighlightCellsMessage.prototype.getClassName = function() {
  return 'DebugHighlightCellsMessage';
};

module.exports.id = 2001;
module.exports.class = DebugHighlightCellsMessage;
module.exports.getInstance = function() {
  return new DebugHighlightCellsMessage();
};