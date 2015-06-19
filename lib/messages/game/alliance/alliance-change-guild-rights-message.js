var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceChangeGuildRightsMessage = function() {
  this.guildId = 0;
  this.rights = 0;
};

util.inherits(AllianceChangeGuildRightsMessage, BaseMessage);

AllianceChangeGuildRightsMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceChangeGuildRightsMessage(output);
};

AllianceChangeGuildRightsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceChangeGuildRightsMessage(input);
};

AllianceChangeGuildRightsMessage.prototype.serializeAs_AllianceChangeGuildRightsMessage = function(output) {
  if (this.guildId < 0) {
    throw (new Error((("Forbidden value (" + this.guildId) + ") on element guildId.")));
  };
  output.writeVarInt(this.guildId);
  if (this.rights < 0) {
    throw (new Error((("Forbidden value (" + this.rights) + ") on element rights.")));
  };
  output.writeByte(this.rights);
};

AllianceChangeGuildRightsMessage.prototype.deserializeAs_AllianceChangeGuildRightsMessage = function(input) {
  this.guildId = input.readVarUhInt();
  if (this.guildId < 0) {
    throw (new Error((("Forbidden value (" + this.guildId) + ") on element of AllianceChangeGuildRightsMessage.guildId.")));
  };
  this.rights = input.readByte();
  if (this.rights < 0) {
    throw (new Error((("Forbidden value (" + this.rights) + ") on element of AllianceChangeGuildRightsMessage.rights.")));
  };
};

AllianceChangeGuildRightsMessage.prototype.getMessageId = function() {
  return 6426;
};

AllianceChangeGuildRightsMessage.prototype.getClassName = function() {
  return 'AllianceChangeGuildRightsMessage';
};

module.exports.id = 6426;
module.exports.class = AllianceChangeGuildRightsMessage;