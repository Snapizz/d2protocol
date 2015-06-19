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

GuildFightLeaveRequestMessage.prototype.serializeAs_GuildFightLeaveRequestMessage = function(output) {
  if (this.taxCollectorId < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorId) + ") on element taxCollectorId.")));
  };
  output.writeInt(this.taxCollectorId);
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element characterId.")));
  };
  output.writeVarInt(this.characterId);
};

GuildFightLeaveRequestMessage.prototype.deserializeAs_GuildFightLeaveRequestMessage = function(input) {
  this.taxCollectorId = input.readInt();
  if (this.taxCollectorId < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorId) + ") on element of GuildFightLeaveRequestMessage.taxCollectorId.")));
  };
  this.characterId = input.readVarUhInt();
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element of GuildFightLeaveRequestMessage.characterId.")));
  };
};

GuildFightLeaveRequestMessage.prototype.getMessageId = function() {
  return 5715;
};

GuildFightLeaveRequestMessage.prototype.getClassName = function() {
  return 'GuildFightLeaveRequestMessage';
};

module.exports.id = 5715;
module.exports.class = GuildFightLeaveRequestMessage;