var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

MoodSmileyUpdateMessage.prototype.serializeAs_MoodSmileyUpdateMessage = function(param1) {
  if (this.accountId < 0) {
    throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
  } else {
    param1.writeInt(this.accountId);
    if (this.playerId < 0) {
      throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
      param1.writeVarInt(this.playerId);
      param1.writeByte(this.smileyId);
      return;
    }
  }
};

MoodSmileyUpdateMessage.prototype.deserializeAs_MoodSmileyUpdateMessage = function(param1) {
  this.accountId = param1.readInt();
  if (this.accountId < 0) {
    throw new Error("Forbidden value (" + this.accountId + ") on element of MoodSmileyUpdateMessage.accountId.");
  } else {
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
      throw new Error("Forbidden value (" + this.playerId + ") on element of MoodSmileyUpdateMessage.playerId.");
    } else {
      this.smileyId = param1.readByte();
      return;
    }
  }
};

MoodSmileyUpdateMessage.prototype.getMessageId = function() {
  return 6388;
};

MoodSmileyUpdateMessage.prototype.getClassName = function() {
  return 'MoodSmileyUpdateMessage';
};

module.exports.id = 6388;
module.exports.class = MoodSmileyUpdateMessage;
module.exports.getInstance = function() {
  return new MoodSmileyUpdateMessage();
};