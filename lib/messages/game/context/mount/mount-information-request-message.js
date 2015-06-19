var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountInformationRequestMessage = function() {
  this.id = 0;
  this.time = 0;
};

util.inherits(MountInformationRequestMessage, BaseMessage);

MountInformationRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MountInformationRequestMessage(output);
};

MountInformationRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountInformationRequestMessage(input);
};

MountInformationRequestMessage.prototype.serializeAs_MountInformationRequestMessage = function(output) {
  if ((((this.id < -9007199254740992)) || ((this.id > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeDouble(this.id);
  if ((((this.time < -9007199254740992)) || ((this.time > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.time) + ") on element time.")));
  };
  output.writeDouble(this.time);
};

MountInformationRequestMessage.prototype.deserializeAs_MountInformationRequestMessage = function(input) {
  this.id = input.readDouble();
  if ((((this.id < -9007199254740992)) || ((this.id > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of MountInformationRequestMessage.id.")));
  };
  this.time = input.readDouble();
  if ((((this.time < -9007199254740992)) || ((this.time > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.time) + ") on element of MountInformationRequestMessage.time.")));
  };
};

MountInformationRequestMessage.prototype.getMessageId = function() {
  return 5972;
};

MountInformationRequestMessage.prototype.getClassName = function() {
  return 'MountInformationRequestMessage';
};

module.exports.id = 5972;
module.exports.class = MountInformationRequestMessage;