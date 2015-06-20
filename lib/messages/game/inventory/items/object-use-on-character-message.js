var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

ObjectUseOnCharacterMessage.prototype.serializeAs_ObjectUseOnCharacterMessage = function(param1) {
  this.serializeAs_ObjectUseMessage(param1);
  if (this.characterId < 0) {
    throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
  } else {
    param1.writeVarInt(this.characterId);
    return;
  }
};

ObjectUseOnCharacterMessage.prototype.deserializeAs_ObjectUseOnCharacterMessage = function(param1) {
  this.deserialize(param1);
  this.characterId = param1.readVarUhInt();
  if (this.characterId < 0) {
    throw new Error("Forbidden value (" + this.characterId + ") on element of ObjectUseOnCharacterMessage.characterId.");
  } else {
    return;
  }
};

ObjectUseOnCharacterMessage.prototype.getMessageId = function() {
  return 3003;
};

ObjectUseOnCharacterMessage.prototype.getClassName = function() {
  return 'ObjectUseOnCharacterMessage';
};

module.exports.id = 3003;
module.exports.class = ObjectUseOnCharacterMessage;
module.exports.getInstance = function() {
  return new ObjectUseOnCharacterMessage();
};