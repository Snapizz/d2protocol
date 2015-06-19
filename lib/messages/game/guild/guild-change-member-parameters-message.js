var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildChangeMemberParametersMessage = function() {
  this.memberId = 0;
  this.rank = 0;
  this.experienceGivenPercent = 0;
  this.rights = 0;
};

util.inherits(GuildChangeMemberParametersMessage, BaseMessage);

GuildChangeMemberParametersMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildChangeMemberParametersMessage(output);
};

GuildChangeMemberParametersMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildChangeMemberParametersMessage(input);
};

GuildChangeMemberParametersMessage.prototype.serializeAs_GuildChangeMemberParametersMessage = function(output) {
  if (this.memberId < 0) {
    throw (new Error((("Forbidden value (" + this.memberId) + ") on element memberId.")));
  };
  output.writeVarInt(this.memberId);
  if (this.rank < 0) {
    throw (new Error((("Forbidden value (" + this.rank) + ") on element rank.")));
  };
  output.writeVarShort(this.rank);
  if ((((this.experienceGivenPercent < 0)) || ((this.experienceGivenPercent > 100)))) {
    throw (new Error((("Forbidden value (" + this.experienceGivenPercent) + ") on element experienceGivenPercent.")));
  };
  output.writeByte(this.experienceGivenPercent);
  if (this.rights < 0) {
    throw (new Error((("Forbidden value (" + this.rights) + ") on element rights.")));
  };
  output.writeVarInt(this.rights);
};

GuildChangeMemberParametersMessage.prototype.deserializeAs_GuildChangeMemberParametersMessage = function(input) {
  this.memberId = input.readVarUhInt();
  if (this.memberId < 0) {
    throw (new Error((("Forbidden value (" + this.memberId) + ") on element of GuildChangeMemberParametersMessage.memberId.")));
  };
  this.rank = input.readVarUhShort();
  if (this.rank < 0) {
    throw (new Error((("Forbidden value (" + this.rank) + ") on element of GuildChangeMemberParametersMessage.rank.")));
  };
  this.experienceGivenPercent = input.readByte();
  if ((((this.experienceGivenPercent < 0)) || ((this.experienceGivenPercent > 100)))) {
    throw (new Error((("Forbidden value (" + this.experienceGivenPercent) + ") on element of GuildChangeMemberParametersMessage.experienceGivenPercent.")));
  };
  this.rights = input.readVarUhInt();
  if (this.rights < 0) {
    throw (new Error((("Forbidden value (" + this.rights) + ") on element of GuildChangeMemberParametersMessage.rights.")));
  };
};

GuildChangeMemberParametersMessage.prototype.getMessageId = function() {
  return 5549;
};

GuildChangeMemberParametersMessage.prototype.getClassName = function() {
  return 'GuildChangeMemberParametersMessage';
};

module.exports.id = 5549;
module.exports.class = GuildChangeMemberParametersMessage;