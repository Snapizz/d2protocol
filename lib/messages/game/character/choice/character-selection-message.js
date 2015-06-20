var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var CharacterSelectionMessage = function() {
  this.id = 0;
};

util.inherits(CharacterSelectionMessage, BaseMessage);

CharacterSelectionMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterSelectionMessage(output);
};

CharacterSelectionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterSelectionMessage(input);
};

CharacterSelectionMessage.prototype.serializeAs_CharacterSelectionMessage = function(param1) {
  if (this.id < 1 || this.id > 2147483647) {
    throw new Error("Forbidden value (" + this.id + ") on element id.");
  } else {
    param1.writeInt(this.id);
    return;
  }
};

CharacterSelectionMessage.prototype.deserializeAs_CharacterSelectionMessage = function(param1) {
  this.id = param1.readInt();
  if (this.id < 1 || this.id > 2147483647) {
    throw new Error("Forbidden value (" + this.id + ") on element of CharacterSelectionMessage.id.");
  } else {
    return;
  }
};

CharacterSelectionMessage.prototype.getMessageId = function() {
  return 152;
};

CharacterSelectionMessage.prototype.getClassName = function() {
  return 'CharacterSelectionMessage';
};

module.exports.id = 152;
module.exports.class = CharacterSelectionMessage;
module.exports.getInstance = function() {
  return new CharacterSelectionMessage();
};