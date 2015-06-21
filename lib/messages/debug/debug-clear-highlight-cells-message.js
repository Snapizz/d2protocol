var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var DebugClearHighlightCellsMessage = module.exports = function() {


    return this;
};

require('util').inherits(DebugClearHighlightCellsMessage, d2com.NetworkMessage.class);

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