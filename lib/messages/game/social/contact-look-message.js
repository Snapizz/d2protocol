var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ContactLookMessage = function() {
  this.requestId = 0;
  this.playerName = "";
  this.playerId = 0;
  this.look;
};

util.inherits(ContactLookMessage, BaseMessage);

ContactLookMessage.prototype.serialize = function(output) {
  this.serializeAs_ContactLookMessage(output);
};

ContactLookMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ContactLookMessage(input);
};

ContactLookMessage.prototype.serializeAs_ContactLookMessage = function(output) {
  if (this.requestId < 0) {
    throw (new Error((("Forbidden value (" + this.requestId) + ") on element requestId.")));
  };
  output.writeVarInt(this.requestId);
  output.writeUTF(this.playerName);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  this.look.serializeAs_EntityLook(output);
};

ContactLookMessage.prototype.deserializeAs_ContactLookMessage = function(input) {
  this.requestId = input.readVarUhInt();
  if (this.requestId < 0) {
    throw (new Error((("Forbidden value (" + this.requestId) + ") on element of ContactLookMessage.requestId.")));
  };
  this.playerName = input.readUTF();
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of ContactLookMessage.playerId.")));
  };
  this.look = new EntityLook();
  this.look.deserialize(input);
};

ContactLookMessage.prototype.getMessageId = function() {
  return 5934;
};

ContactLookMessage.prototype.getClassName = function() {
  return 'ContactLookMessage';
};

module.exports.id = 5934;
module.exports.class = ContactLookMessage;