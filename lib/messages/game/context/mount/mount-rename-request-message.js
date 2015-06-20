var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountRenameRequestMessage = function() {
  this.name = "";
  this.mountId = 0;
};

util.inherits(MountRenameRequestMessage, BaseMessage);

MountRenameRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MountRenameRequestMessage(output);
};

MountRenameRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountRenameRequestMessage(input);
};

MountRenameRequestMessage.prototype.serializeAs_MountRenameRequestMessage = function(output) {
  param1.writeUTF(this.name);
  param1.writeVarInt(this.mountId);
};

MountRenameRequestMessage.prototype.deserializeAs_MountRenameRequestMessage = function(input) {
  this.name = param1.readUTF();
  this.mountId = param1.readVarInt();
};

MountRenameRequestMessage.prototype.getMessageId = function() {
  return 5987;
};

MountRenameRequestMessage.prototype.getClassName = function() {
  return 'MountRenameRequestMessage';
};

module.exports.id = 5987;
module.exports.class = MountRenameRequestMessage;