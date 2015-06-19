var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceGuildLeavingMessage = function() {
  this.kicked = false;
  this.guildId = 0;
};

util.inherits(AllianceGuildLeavingMessage, BaseMessage);

AllianceGuildLeavingMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceGuildLeavingMessage(output);
};

AllianceGuildLeavingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceGuildLeavingMessage(input);
};

AllianceGuildLeavingMessage.prototype.serializeAs_AllianceGuildLeavingMessage = function(output) {
  output.writeBoolean(this.kicked);
  if (this.guildId < 0) {
    throw (new Error((("Forbidden value (" + this.guildId) + ") on element guildId.")));
  };
  output.writeVarInt(this.guildId);
};

AllianceGuildLeavingMessage.prototype.deserializeAs_AllianceGuildLeavingMessage = function(input) {
  this.kicked = input.readBoolean();
  this.guildId = input.readVarUhInt();
  if (this.guildId < 0) {
    throw (new Error((("Forbidden value (" + this.guildId) + ") on element of AllianceGuildLeavingMessage.guildId.")));
  };
};

AllianceGuildLeavingMessage.prototype.getMessageId = function() {
  return 6399;
};

AllianceGuildLeavingMessage.prototype.getClassName = function() {
  return 'AllianceGuildLeavingMessage';
};

module.exports.id = 6399;
module.exports.class = AllianceGuildLeavingMessage;