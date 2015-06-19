var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var HouseGuildRightsMessage = function() {
  this.houseId = 0;
  this.guildInfo;
  this.rights = 0;
};

util.inherits(HouseGuildRightsMessage, BaseMessage);

HouseGuildRightsMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseGuildRightsMessage(output);
};

HouseGuildRightsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseGuildRightsMessage(input);
};

HouseGuildRightsMessage.prototype.serializeAs_HouseGuildRightsMessage = function(output) {
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element houseId.")));
  };
  output.writeVarShort(this.houseId);
  this.guildInfo.serializeAs_GuildInformations(output);
  if (this.rights < 0) {
    throw (new Error((("Forbidden value (" + this.rights) + ") on element rights.")));
  };
  output.writeVarInt(this.rights);
};

HouseGuildRightsMessage.prototype.deserializeAs_HouseGuildRightsMessage = function(input) {
  this.houseId = input.readVarUhShort();
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element of HouseGuildRightsMessage.houseId.")));
  };
  this.guildInfo = new GuildInformations();
  this.guildInfo.deserialize(input);
  this.rights = input.readVarUhInt();
  if (this.rights < 0) {
    throw (new Error((("Forbidden value (" + this.rights) + ") on element of HouseGuildRightsMessage.rights.")));
  };
};

HouseGuildRightsMessage.prototype.getMessageId = function() {
  return 5703;
};

HouseGuildRightsMessage.prototype.getClassName = function() {
  return 'HouseGuildRightsMessage';
};

module.exports.id = 5703;
module.exports.class = HouseGuildRightsMessage;