var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

ShowCellSpectatorMessage.prototype.serializeAs_ShowCellSpectatorMessage = function(param1) {
  this.serializeAs_ShowCellMessage(param1);
  param1.writeUTF(this.playerName);
};

ShowCellSpectatorMessage.prototype.deserializeAs_ShowCellSpectatorMessage = function(param1) {
  super.deserialize(param1);
  this.playerName = param1.readUTF();
};

ShowCellSpectatorMessage.prototype.getMessageId = function() {
  return 6158;
};

ShowCellSpectatorMessage.prototype.getClassName = function() {
  return 'ShowCellSpectatorMessage';
};

module.exports.id = 6158;
module.exports.class = ShowCellSpectatorMessage;
module.exports.getInstance = function() {
  return new ShowCellSpectatorMessage();
};