var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountSterilizedMessage = function() {
  this.mountId = 0;
};

util.inherits(MountSterilizedMessage, BaseMessage);

MountSterilizedMessage.prototype.serialize = function(output) {
  this.serializeAs_MountSterilizedMessage(output);
};

MountSterilizedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountSterilizedMessage(input);
};

MountSterilizedMessage.prototype.serializeAs_MountSterilizedMessage = function(output) {
  if ((((this.mountId < -9007199254740992)) || ((this.mountId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element mountId.")));
  };
  output.writeDouble(this.mountId);
};

MountSterilizedMessage.prototype.deserializeAs_MountSterilizedMessage = function(input) {
  this.mountId = input.readDouble();
  if ((((this.mountId < -9007199254740992)) || ((this.mountId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element of MountSterilizedMessage.mountId.")));
  };
};

MountSterilizedMessage.prototype.getMessageId = function() {
  return 5977;
};

MountSterilizedMessage.prototype.getClassName = function() {
  return 'MountSterilizedMessage';
};

module.exports.id = 5977;
module.exports.class = MountSterilizedMessage;