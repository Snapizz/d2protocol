var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterSelectedForceMessage = function() {
  this.id = 0;
};

util.inherits(CharacterSelectedForceMessage, BaseMessage);

CharacterSelectedForceMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterSelectedForceMessage(output);
};

CharacterSelectedForceMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterSelectedForceMessage(input);
};

CharacterSelectedForceMessage.prototype.serializeAs_CharacterSelectedForceMessage = function(output) {
  if ((((this.id < 1)) || ((this.id > 2147483647)))) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeInt(this.id);
};

CharacterSelectedForceMessage.prototype.deserializeAs_CharacterSelectedForceMessage = function(input) {
  this.id = input.readInt();
  if ((((this.id < 1)) || ((this.id > 2147483647)))) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of CharacterSelectedForceMessage.id.")));
  };
};

CharacterSelectedForceMessage.prototype.getMessageId = function() {
  return 6068;
};

CharacterSelectedForceMessage.prototype.getClassName = function() {
  return 'CharacterSelectedForceMessage';
};

module.exports.id = 6068;
module.exports.class = CharacterSelectedForceMessage;