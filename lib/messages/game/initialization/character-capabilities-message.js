var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var CharacterCapabilitiesMessage = function() {
  this.guildEmblemSymbolCategories = 0;
};

util.inherits(CharacterCapabilitiesMessage, BaseMessage);

CharacterCapabilitiesMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterCapabilitiesMessage(output);
};

CharacterCapabilitiesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterCapabilitiesMessage(input);
};

CharacterCapabilitiesMessage.prototype.serializeAs_CharacterCapabilitiesMessage = function(param1) {
  if (this.guildEmblemSymbolCategories < 0) {
    throw new Error("Forbidden value (" + this.guildEmblemSymbolCategories + ") on element guildEmblemSymbolCategories.");
  } else {
    param1.writeVarInt(this.guildEmblemSymbolCategories);
    return;
  }
};

CharacterCapabilitiesMessage.prototype.deserializeAs_CharacterCapabilitiesMessage = function(param1) {
  this.guildEmblemSymbolCategories = param1.readVarUhInt();
  if (this.guildEmblemSymbolCategories < 0) {
    throw new Error("Forbidden value (" + this.guildEmblemSymbolCategories + ") on element of CharacterCapabilitiesMessage.guildEmblemSymbolCategories.");
  } else {
    return;
  }
};

CharacterCapabilitiesMessage.prototype.getMessageId = function() {
  return 6339;
};

CharacterCapabilitiesMessage.prototype.getClassName = function() {
  return 'CharacterCapabilitiesMessage';
};

module.exports.id = 6339;
module.exports.class = CharacterCapabilitiesMessage;
module.exports.getInstance = function() {
  return new CharacterCapabilitiesMessage();
};