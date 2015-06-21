var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ShowCellSpectatorMessage = function() {
    this.playerName = "";
};

require('util').inherits(ShowCellSpectatorMessage, require('./show-cell-message.js').ShowCellMessage);

module.exports = function() {
    return new ShowCellSpectatorMessage();
};

ShowCellSpectatorMessage.prototype.serialize = function(output) {
    this.serializeAs_ShowCellSpectatorMessage(output);
};

ShowCellSpectatorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ShowCellSpectatorMessage(input);
};

ShowCellSpectatorMessage.prototype.serializeAs_ShowCellSpectatorMessage = function(param1) {
    this.serializeAs_ShowCellMessage(param1);
    param1.writeUTF(this.playerName);
};

ShowCellSpectatorMessage.prototype.deserializeAs_ShowCellSpectatorMessage = function(param1) {
    this.deserializeAs_ShowCellMessage(param1);
    this.playerName = param1.readUTF();
};

ShowCellSpectatorMessage.prototype.getMessageId = function() {
    return 6158;
};

ShowCellSpectatorMessage.prototype.getClassName = function() {
    return 'ShowCellSpectatorMessage';
};

module.exports.id = 6158;
module.exports.ShowCellSpectatorMessage = ShowCellSpectatorMessage;