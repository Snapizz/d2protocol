var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DebugClearHighlightCellsMessage = function() {

};

util.inherits(DebugClearHighlightCellsMessage, BaseMessage);

DebugClearHighlightCellsMessage.prototype.serialize = function(output) {
  this.serializeAs_DebugClearHighlightCellsMessage(output);
};

DebugClearHighlightCellsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DebugClearHighlightCellsMessage(input);
};

DebugClearHighlightCellsMessage.prototype.serializeAs_DebugClearHighlightCellsMessage = function(param1) {

};

DebugClearHighlightCellsMessage.prototype.deserializeAs_DebugClearHighlightCellsMessage = function(param1) {

};

DebugClearHighlightCellsMessage.prototype.getMessageId = function() {
  return 2002;
};

DebugClearHighlightCellsMessage.prototype.getClassName = function() {
  return 'DebugClearHighlightCellsMessage';
};

module.exports.id = 2002;
module.exports.class = DebugClearHighlightCellsMessage;