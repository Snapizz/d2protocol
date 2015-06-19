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

MountEquipedErrorMessage.prototype.serializeAs_MountEquipedErrorMessage = function(output) {
  output.writeByte(this.errorType);
};

MountEquipedErrorMessage.prototype.deserializeAs_MountEquipedErrorMessage = function(input) {
  this.errorType = input.readByte();
  if (this.errorType < 0) {
    throw (new Error((("Forbidden value (" + this.errorType) + ") on element of MountEquipedErrorMessage.errorType.")));
  };
};

MountEquipedErrorMessage.prototype.getMessageId = function() {
  return 5963;
};

MountEquipedErrorMessage.prototype.getClassName = function() {
  return 'MountEquipedErrorMessage';
};

module.exports.id = 5963;
module.exports.class = MountEquipedErrorMessage;