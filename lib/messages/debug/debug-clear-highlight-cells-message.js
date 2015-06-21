var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var DebugClearHighlightCellsMessage = function() {

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
module.exports.class = DebugClearHighlightCellsMessage;
module.exports.getInstance = function() {
    return new DebugClearHighlightCellsMessage;
};