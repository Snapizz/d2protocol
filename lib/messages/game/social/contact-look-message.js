var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var EntityLook = require('../../../types/game/look/entity-look.js');

var ContactLookMessage = function() {
  this.requestId = 0;
  this.playerName = "";
  this.playerId = 0;
  this.look = new EntityLook();
};

util.inherits(ContactLookMessage, BaseMessage);

ContactLookMessage.prototype.serialize = function(output) {
  this.serializeAs_ContactLookMessage(output);
};

ContactLookMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ContactLookMessage(input);
};

ContactLookMessage.prototype.serializeAs_ContactLookMessage = function(param1) {
  if (this.requestId < 0) {
    throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
  } else {
    param1.writeVarInt(this.requestId);
    param1.writeUTF(this.playerName);
    if (this.playerId < 0) {
      throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
      param1.writeVarInt(this.playerId);
      this.look.serializeAs_EntityLook(param1);
      return;
    }
  }
};

ContactLookMessage.prototype.deserializeAs_ContactLookMessage = function(param1) {
  this.requestId = param1.readVarUhInt();
  if (this.requestId < 0) {
    throw new Error("Forbidden value (" + this.requestId + ") on element of ContactLookMessage.requestId.");
  } else {
    this.playerName = param1.readUTF();
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
      throw new Error("Forbidden value (" + this.playerId + ") on element of ContactLookMessage.playerId.");
    } else {
      this.look = new EntityLook();
      this.look.deserialize(param1);
      return;
    }
  }
};

ContactLookMessage.prototype.getMessageId = function() {
  return 5934;
};

ContactLookMessage.prototype.getClassName = function() {
  return 'ContactLookMessage';
};

module.exports.id = 5934;
module.exports.class = ContactLookMessage;