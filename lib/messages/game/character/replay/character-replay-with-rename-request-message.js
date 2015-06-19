var d2com = require('d2com'),
  BaseMessage = require('./character-replay-request-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterReplayWithRenameRequestMessage = function() {
  this.name = "";
};

util.inherits(CharacterReplayWithRenameRequestMessage, BaseMessage);

CharacterReplayWithRenameRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterReplayWithRenameRequestMessage(output);
};

CharacterReplayWithRenameRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterReplayWithRenameRequestMessage(input);
};

CharacterReplayWithRenameRequestMessage.prototype.serializeAs_CharacterReplayWithRenameRequestMessage = function(output) {
  this.serializeAs_CharacterReplayRequestMessage(output);
  output.writeUTF(this.name);
};

CharacterReplayWithRenameRequestMessage.prototype.deserializeAs_CharacterReplayWithRenameRequestMessage = function(input) {
  this.deserialize(input);
  this.name = input.readUTF();
};

CharacterReplayWithRenameRequestMessage.prototype.getMessageId = function() {
  return 6122;
};

CharacterReplayWithRenameRequestMessage.prototype.getClassName = function() {
  return 'CharacterReplayWithRenameRequestMessage';
};

module.exports.id = 6122;
module.exports.class = CharacterReplayWithRenameRequestMessage;