var d2com = require('d2com'),
  BaseMessage = require('./character-selected-error-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterSelectedErrorMissingMapPackMessage = function() {
  this.subAreaId = 0;
};

util.inherits(CharacterSelectedErrorMissingMapPackMessage, BaseMessage);

CharacterSelectedErrorMissingMapPackMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterSelectedErrorMissingMapPackMessage(output);
};

CharacterSelectedErrorMissingMapPackMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterSelectedErrorMissingMapPackMessage(input);
};

CharacterSelectedErrorMissingMapPackMessage.prototype.serializeAs_CharacterSelectedErrorMissingMapPackMessage = function(output) {
  this.serializeAs_CharacterSelectedErrorMessage(output);
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeInt(this.subAreaId);
};

CharacterSelectedErrorMissingMapPackMessage.prototype.deserializeAs_CharacterSelectedErrorMissingMapPackMessage = function(input) {
  this.deserialize(input);
  this.subAreaId = input.readInt();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of CharacterSelectedErrorMissingMapPackMessage.subAreaId.")));
  };
};

CharacterSelectedErrorMissingMapPackMessage.prototype.getMessageId = function() {
  return 6300;
};

CharacterSelectedErrorMissingMapPackMessage.prototype.getClassName = function() {
  return 'CharacterSelectedErrorMissingMapPackMessage';
};

module.exports.id = 6300;
module.exports.class = CharacterSelectedErrorMissingMapPackMessage;