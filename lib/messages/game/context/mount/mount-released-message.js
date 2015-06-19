var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountReleasedMessage = function() {
  this.mountId = 0;
};

util.inherits(MountReleasedMessage, BaseMessage);

MountReleasedMessage.prototype.serialize = function(output) {
  this.serializeAs_MountReleasedMessage(output);
};

MountReleasedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountReleasedMessage(input);
};

MountReleasedMessage.prototype.serializeAs_MountReleasedMessage = function(output) {
  if ((((this.mountId < -9007199254740992)) || ((this.mountId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element mountId.")));
  };
  output.writeDouble(this.mountId);
};

MountReleasedMessage.prototype.deserializeAs_MountReleasedMessage = function(input) {
  this.mountId = input.readDouble();
  if ((((this.mountId < -9007199254740992)) || ((this.mountId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element of MountReleasedMessage.mountId.")));
  };
};

MountReleasedMessage.prototype.getMessageId = function() {
  return 6308;
};

MountReleasedMessage.prototype.getClassName = function() {
  return 'MountReleasedMessage';
};

module.exports.id = 6308;
module.exports.class = MountReleasedMessage;