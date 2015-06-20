var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

NpcDialogCreationMessage.prototype.serializeAs_NpcDialogCreationMessage = function(output) {
  param1.writeInt(this.mapId);
  param1.writeInt(this.npcId);
};

NpcDialogCreationMessage.prototype.deserializeAs_NpcDialogCreationMessage = function(input) {
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