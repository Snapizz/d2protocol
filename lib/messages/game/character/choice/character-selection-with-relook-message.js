var d2com = require('d2com'),
  BaseMessage = require('./character-selection-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterSelectionWithRelookMessage = function() {
  this.cosmeticId = 0;
};

util.inherits(CharacterSelectionWithRelookMessage, BaseMessage);

CharacterSelectionWithRelookMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterSelectionWithRelookMessage(output);
};

CharacterSelectionWithRelookMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterSelectionWithRelookMessage(input);
};

CharacterSelectionWithRelookMessage.prototype.serializeAs_CharacterSelectionWithRelookMessage = function(output) {
  this.serializeAs_CharacterSelectionMessage(output);
  if (this.cosmeticId < 0) {
    throw (new Error((("Forbidden value (" + this.cosmeticId) + ") on element cosmeticId.")));
  };
  output.writeInt(this.cosmeticId);
};

CharacterSelectionWithRelookMessage.prototype.deserializeAs_CharacterSelectionWithRelookMessage = function(input) {
  this.deserialize(input);
  this.cosmeticId = input.readInt();
  if (this.cosmeticId < 0) {
    throw (new Error((("Forbidden value (" + this.cosmeticId) + ") on element of CharacterSelectionWithRelookMessage.cosmeticId.")));
  };
};

CharacterSelectionWithRelookMessage.prototype.getMessageId = function() {
  return 6353;
};

CharacterSelectionWithRelookMessage.prototype.getClassName = function() {
  return 'CharacterSelectionWithRelookMessage';
};

module.exports.id = 6353;
module.exports.class = CharacterSelectionWithRelookMessage;