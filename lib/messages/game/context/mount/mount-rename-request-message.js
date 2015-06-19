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
  output.writeUTF(this.name);
  if ((((this.mountId < -9007199254740992)) || ((this.mountId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element mountId.")));
  };
  output.writeDouble(this.mountId);
};

MountRenameRequestMessage.prototype.deserializeAs_MountRenameRequestMessage = function(input) {
  this.name = input.readUTF();
  this.mountId = input.readDouble();
  if ((((this.mountId < -9007199254740992)) || ((this.mountId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element of MountRenameRequestMessage.mountId.")));
  };
};

MountRenameRequestMessage.prototype.getMessageId = function() {
  return 5987;
};

MountRenameRequestMessage.prototype.getClassName = function() {
  return 'MountRenameRequestMessage';
};

module.exports.id = 5987;
module.exports.class = MountRenameRequestMessage;