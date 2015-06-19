var d2com = require('d2com'),
  BaseMessage = require('./show-cell-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ShowCellSpectatorMessage = function() {
  this.playerName = "";
};

util.inherits(ShowCellSpectatorMessage, BaseMessage);

ShowCellSpectatorMessage.prototype.serialize = function(output) {
  this.serializeAs_ShowCellSpectatorMessage(output);
};

ShowCellSpectatorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ShowCellSpectatorMessage(input);
};

ShowCellSpectatorMessage.prototype.serializeAs_ShowCellSpectatorMessage = function(output) {
  this.serializeAs_ShowCellMessage(output);
  output.writeUTF(this.playerName);
};

ShowCellSpectatorMessage.prototype.deserializeAs_ShowCellSpectatorMessage = function(input) {
  this.deserialize(input);
  this.playerName = input.readUTF();
};

ShowCellSpectatorMessage.prototype.getMessageId = function() {
  return 6158;
};

ShowCellSpectatorMessage.prototype.getClassName = function() {
  return 'ShowCellSpectatorMessage';
};

module.exports.id = 6158;
module.exports.class = ShowCellSpectatorMessage;