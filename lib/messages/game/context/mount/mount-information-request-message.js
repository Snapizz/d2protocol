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

MountInformationRequestMessage.prototype.serializeAs_MountInformationRequestMessage = function(param1) {
  if (this.id < -9.007199254740992E15 || this.id > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.id + ") on element id.");
  } else {
    param1.writeDouble(this.id);
    if (this.time < -9.007199254740992E15 || this.time > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.time + ") on element time.");
    } else {
      param1.writeDouble(this.time);
      return;
    }
  }
};

MountInformationRequestMessage.prototype.deserializeAs_MountInformationRequestMessage = function(param1) {
  this.id = param1.readDouble();
  if (this.id < -9.007199254740992E15 || this.id > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.id + ") on element of MountInformationRequestMessage.id.");
  } else {
    this.time = param1.readDouble();
    if (this.time < -9.007199254740992E15 || this.time > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.time + ") on element of MountInformationRequestMessage.time.");
    } else {
      return;
    }
  }
};

MountInformationRequestMessage.prototype.getMessageId = function() {
  return 5972;
};

MountInformationRequestMessage.prototype.getClassName = function() {
  return 'MountInformationRequestMessage';
};

module.exports.id = 5972;
module.exports.class = MountInformationRequestMessage;