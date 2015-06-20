var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GuildFightLeaveRequestMessage = function() {
  this.taxCollectorId = 0;
  this.characterId = 0;
};

util.inherits(GuildFightLeaveRequestMessage, BaseMessage);

GuildFightLeaveRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildFightLeaveRequestMessage(output);
};

GuildFightLeaveRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildFightLeaveRequestMessage(input);
};

GuildFightLeaveRequestMessage.prototype.serializeAs_GuildFightLeaveRequestMessage = function(param1) {
  if (this.taxCollectorId < 0) {
    throw new Error("Forbidden value (" + this.taxCollectorId + ") on element taxCollectorId.");
  } else {
    param1.writeInt(this.taxCollectorId);
    if (this.characterId < 0) {
      throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
    } else {
      param1.writeVarInt(this.characterId);
      return;
    }
  }
};

GuildFightLeaveRequestMessage.prototype.deserializeAs_GuildFightLeaveRequestMessage = function(param1) {
  this.taxCollectorId = param1.readInt();
  if (this.taxCollectorId < 0) {
    throw new Error("Forbidden value (" + this.taxCollectorId + ") on element of GuildFightLeaveRequestMessage.taxCollectorId.");
  } else {
    this.characterId = param1.readVarUhInt();
    if (this.characterId < 0) {
      throw new Error("Forbidden value (" + this.characterId + ") on element of GuildFightLeaveRequestMessage.characterId.");
    } else {
      return;
    }
  }
};

GuildFightLeaveRequestMessage.prototype.getMessageId = function() {
  return 5715;
};

GuildFightLeaveRequestMessage.prototype.getClassName = function() {
  return 'GuildFightLeaveRequestMessage';
};

module.exports.id = 5715;
module.exports.class = GuildFightLeaveRequestMessage;
module.exports.getInstance = function() {
  return new GuildFightLeaveRequestMessage();
};