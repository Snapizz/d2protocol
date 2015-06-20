var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var NpcDialogCreationMessage = function() {
  this.mapId = 0;
  this.npcId = 0;
};

util.inherits(NpcDialogCreationMessage, BaseMessage);

NpcDialogCreationMessage.prototype.serialize = function(output) {
  this.serializeAs_NpcDialogCreationMessage(output);
};

NpcDialogCreationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NpcDialogCreationMessage(input);
};

NpcDialogCreationMessage.prototype.serializeAs_NpcDialogCreationMessage = function(param1) {
  param1.writeInt(this.mapId);
  param1.writeInt(this.npcId);
};

NpcDialogCreationMessage.prototype.deserializeAs_NpcDialogCreationMessage = function(param1) {
  this.mapId = param1.readInt();
  this.npcId = param1.readInt();
};

NpcDialogCreationMessage.prototype.getMessageId = function() {
  return 5618;
};

NpcDialogCreationMessage.prototype.getClassName = function() {
  return 'NpcDialogCreationMessage';
};

module.exports.id = 5618;
module.exports.class = NpcDialogCreationMessage;
module.exports.getInstance = function() {
  return new NpcDialogCreationMessage();
};