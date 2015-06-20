var d2com = require('d2com'),
  BaseMessage = require('./alliance-change-guild-rights-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

AllianceChangeGuildRightsMessage.prototype.serializeAs_AllianceChangeGuildRightsMessage = function(param1) {
  if (this.guildId < 0) {
    throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
  } else {
    param1.writeVarInt(this.guildId);
    if (this.rights < 0) {
      throw new Error("Forbidden value (" + this.rights + ") on element rights.");
    } else {
      param1.writeByte(this.rights);
      return;
    }
  }
};

AllianceChangeGuildRightsMessage.prototype.deserializeAs_AllianceChangeGuildRightsMessage = function(param1) {
  this.guildId = param1.readVarUhInt();
  if (this.guildId < 0) {
    throw new Error("Forbidden value (" + this.guildId + ") on element of AllianceChangeGuildRightsMessage.guildId.");
  } else {
    this.rights = param1.readByte();
    if (this.rights < 0) {
      throw new Error("Forbidden value (" + this.rights + ") on element of AllianceChangeGuildRightsMessage.rights.");
    } else {
      return;
    }
  }
};

AllianceChangeGuildRightsMessage.prototype.getMessageId = function() {
  return 6426;
};

AllianceChangeGuildRightsMessage.prototype.getClassName = function() {
  return 'AllianceChangeGuildRightsMessage';
};

module.exports.id = 6426;
module.exports.class = AllianceChangeGuildRightsMessage;
module.exports.getInstance = function() {
  return new AllianceChangeGuildRightsMessage();
};