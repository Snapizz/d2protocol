var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountRenamedMessage = function() {
  this.mountId = 0;
  this.name = "";
};

util.inherits(MountRenamedMessage, BaseMessage);

MountRenamedMessage.prototype.serialize = function(output) {
  this.serializeAs_MountRenamedMessage(output);
};

MountRenamedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountRenamedMessage(input);
};

MountRenamedMessage.prototype.serializeAs_MountRenamedMessage = function(output) {
  if ((((this.mountId < -9007199254740992)) || ((this.mountId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element mountId.")));
  };
  output.writeDouble(this.mountId);
  output.writeUTF(this.name);
};

MountRenamedMessage.prototype.deserializeAs_MountRenamedMessage = function(input) {
  this.mountId = input.readDouble();
  if ((((this.mountId < -9007199254740992)) || ((this.mountId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element of MountRenamedMessage.mountId.")));
  };
  this.name = input.readUTF();
};

MountRenamedMessage.prototype.getMessageId = function() {
  return 5983;
};

MountRenamedMessage.prototype.getClassName = function() {
  return 'MountRenamedMessage';
};

module.exports.id = 5983;
module.exports.class = MountRenamedMessage;