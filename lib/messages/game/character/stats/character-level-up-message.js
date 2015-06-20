var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var CharacterLevelUpMessage = function() {
  this.newLevel = 0;
};

util.inherits(CharacterLevelUpMessage, BaseMessage);

CharacterLevelUpMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterLevelUpMessage(output);
};

CharacterLevelUpMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterLevelUpMessage(input);
};

CharacterLevelUpMessage.prototype.serializeAs_CharacterLevelUpMessage = function(param1) {
  if (this.newLevel < 2 || this.newLevel > 200) {
    throw new Error("Forbidden value (" + this.newLevel + ") on element newLevel.");
  } else {
    param1.writeByte(this.newLevel);
    return;
  }
};

CharacterLevelUpMessage.prototype.deserializeAs_CharacterLevelUpMessage = function(param1) {
  this.newLevel = param1.readUnsignedByte();
  if (this.newLevel < 2 || this.newLevel > 200) {
    throw new Error("Forbidden value (" + this.newLevel + ") on element of CharacterLevelUpMessage.newLevel.");
  } else {
    return;
  }
};

CharacterLevelUpMessage.prototype.getMessageId = function() {
  return 5670;
};

CharacterLevelUpMessage.prototype.getClassName = function() {
  return 'CharacterLevelUpMessage';
};

module.exports.id = 5670;
module.exports.class = CharacterLevelUpMessage;
module.exports.getInstance = function() {
  return new CharacterLevelUpMessage();
};