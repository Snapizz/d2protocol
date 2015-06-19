var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var NpcGenericActionRequestMessage = function() {
  this.npcId = 0;
  this.npcActionId = 0;
  this.npcMapId = 0;
};

util.inherits(NpcGenericActionRequestMessage, BaseMessage);

NpcGenericActionRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_NpcGenericActionRequestMessage(output);
};

NpcGenericActionRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NpcGenericActionRequestMessage(input);
};

NpcGenericActionRequestMessage.prototype.serializeAs_NpcGenericActionRequestMessage = function(output) {
  output.writeInt(this.npcId);
  if (this.npcActionId < 0) {
    throw (new Error((("Forbidden value (" + this.npcActionId) + ") on element npcActionId.")));
  };
  output.writeByte(this.npcActionId);
  output.writeInt(this.npcMapId);
};

NpcGenericActionRequestMessage.prototype.deserializeAs_NpcGenericActionRequestMessage = function(input) {
  this.npcId = input.readInt();
  this.npcActionId = input.readByte();
  if (this.npcActionId < 0) {
    throw (new Error((("Forbidden value (" + this.npcActionId) + ") on element of NpcGenericActionRequestMessage.npcActionId.")));
  };
  this.npcMapId = input.readInt();
};

NpcGenericActionRequestMessage.prototype.getMessageId = function() {
  return 5898;
};

NpcGenericActionRequestMessage.prototype.getClassName = function() {
  return 'NpcGenericActionRequestMessage';
};

module.exports.id = 5898;
module.exports.class = NpcGenericActionRequestMessage;