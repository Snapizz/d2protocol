var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightOptionStateUpdateMessage = function() {
  this.fightId = 0;
  this.teamId = 2;
  this.option = 3;
  this.state = false;
};

util.inherits(GameFightOptionStateUpdateMessage, BaseMessage);

GameFightOptionStateUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightOptionStateUpdateMessage(output);
};

GameFightOptionStateUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightOptionStateUpdateMessage(input);
};

GameFightOptionStateUpdateMessage.prototype.serializeAs_GameFightOptionStateUpdateMessage = function(output) {
  if (this.fightId < 0) {
    throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
  } else {
    param1.writeShort(this.fightId);
    param1.writeByte(this.teamId);
    param1.writeByte(this.option);
    param1.writeBoolean(this.state);
    return;
  }
};

GameFightOptionStateUpdateMessage.prototype.deserializeAs_GameFightOptionStateUpdateMessage = function(input) {
  this.fightId = param1.readShort();
  if (this.fightId < 0) {
    throw new Error("Forbidden value (" + this.fightId + ") on element of GameFightOptionStateUpdateMessage.fightId.");
  } else {
    this.teamId = param1.readByte();
    if (this.teamId < 0) {
      throw new Error("Forbidden value (" + this.teamId + ") on element of GameFightOptionStateUpdateMessage.teamId.");
    } else {
      this.option = param1.readByte();
      if (this.option < 0) {
        throw new Error("Forbidden value (" + this.option + ") on element of GameFightOptionStateUpdateMessage.option.");
      } else {
        this.state = param1.readBoolean();
        return;
      }
    }
  }
};

GameFightOptionStateUpdateMessage.prototype.getMessageId = function() {
  return 5927;
};

GameFightOptionStateUpdateMessage.prototype.getClassName = function() {
  return 'GameFightOptionStateUpdateMessage';
};

module.exports.id = 5927;
module.exports.class = GameFightOptionStateUpdateMessage;