var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

CharacterSelectionMessage.prototype.serializeAs_CharacterSelectionMessage = function(output) {
  if ((((this.id < 1)) || ((this.id > 2147483647)))) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeInt(this.id);
};

CharacterSelectionMessage.prototype.deserializeAs_CharacterSelectionMessage = function(input) {
  this.id = input.readInt();
  if ((((this.id < 1)) || ((this.id > 2147483647)))) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of CharacterSelectionMessage.id.")));
  };
};

CharacterSelectionMessage.prototype.getMessageId = function() {
  return 152;
};

CharacterSelectionMessage.prototype.getClassName = function() {
  return 'CharacterSelectionMessage';
};

module.exports.id = 152;
module.exports.class = CharacterSelectionMessage;