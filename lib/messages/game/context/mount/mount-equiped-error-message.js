var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountEquipedErrorMessage = function() {
  this.errorType = 0;
};

util.inherits(MountEquipedErrorMessage, BaseMessage);

MountEquipedErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_MountEquipedErrorMessage(output);
};

MountEquipedErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountEquipedErrorMessage(input);
};

MountEquipedErrorMessage.prototype.serializeAs_MountEquipedErrorMessage = function(param1) {
  param1.writeByte(this.errorType);
};

MountEquipedErrorMessage.prototype.deserializeAs_MountEquipedErrorMessage = function(param1) {
  this.errorType = param1.readByte();
  if (this.errorType < 0) {
    throw new Error("Forbidden value (" + this.errorType + ") on element of MountEquipedErrorMessage.errorType.");
  } else {
    return;
  }
};

MountEquipedErrorMessage.prototype.getMessageId = function() {
  return 5963;
};

MountEquipedErrorMessage.prototype.getClassName = function() {
  return 'MountEquipedErrorMessage';
};

module.exports.id = 5963;
module.exports.class = MountEquipedErrorMessage;