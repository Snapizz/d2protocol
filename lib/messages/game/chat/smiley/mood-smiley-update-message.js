var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MoodSmileyUpdateMessage = function() {
  this.accountId = 0;
  this.playerId = 0;
  this.smileyId = 0;
};

util.inherits(MoodSmileyUpdateMessage, BaseMessage);

MoodSmileyUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_MoodSmileyUpdateMessage(output);
};

MoodSmileyUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MoodSmileyUpdateMessage(input);
};

MoodSmileyUpdateMessage.prototype.serializeAs_MoodSmileyUpdateMessage = function(output) {
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element accountId.")));
  };
  output.writeInt(this.accountId);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  output.writeByte(this.smileyId);
};

MoodSmileyUpdateMessage.prototype.deserializeAs_MoodSmileyUpdateMessage = function(input) {
  this.accountId = input.readInt();
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element of MoodSmileyUpdateMessage.accountId.")));
  };
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of MoodSmileyUpdateMessage.playerId.")));
  };
  this.smileyId = input.readByte();
};

MoodSmileyUpdateMessage.prototype.getMessageId = function() {
  return 6388;
};

MoodSmileyUpdateMessage.prototype.getClassName = function() {
  return 'MoodSmileyUpdateMessage';
};

module.exports.id = 6388;
module.exports.class = MoodSmileyUpdateMessage;