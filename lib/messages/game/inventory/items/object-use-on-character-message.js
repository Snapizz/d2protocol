var d2com = require('d2com'),
  BaseMessage = require('./object-use-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectUseOnCharacterMessage = function() {
  this.characterId = 0;
};

util.inherits(ObjectUseOnCharacterMessage, BaseMessage);

ObjectUseOnCharacterMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectUseOnCharacterMessage(output);
};

ObjectUseOnCharacterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectUseOnCharacterMessage(input);
};

ObjectUseOnCharacterMessage.prototype.serializeAs_ObjectUseOnCharacterMessage = function(output) {
  this.serializeAs_ObjectUseMessage(output);
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element characterId.")));
  };
  output.writeVarInt(this.characterId);
};

ObjectUseOnCharacterMessage.prototype.deserializeAs_ObjectUseOnCharacterMessage = function(input) {
  this.deserialize(input);
  this.characterId = input.readVarUhInt();
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element of ObjectUseOnCharacterMessage.characterId.")));
  };
};

ObjectUseOnCharacterMessage.prototype.getMessageId = function() {
  return 3003;
};

ObjectUseOnCharacterMessage.prototype.getClassName = function() {
  return 'ObjectUseOnCharacterMessage';
};

module.exports.id = 3003;
module.exports.class = ObjectUseOnCharacterMessage;