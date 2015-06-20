var BasicGuildInformations = function() {
  this.guildId = 0;
  this.guildName = "";
};



BasicGuildInformations.prototype.serialize = function(output) {
  this.serializeAs_BasicGuildInformations(output);
};

BasicGuildInformations.prototype.deserialize = function(input) {
  this.deserializeAs_BasicGuildInformations(input);
};

BasicGuildInformations.prototype.serializeAs_BasicGuildInformations = function(output) {
  this.serializeAs_AbstractSocialGroupInfos(param1);
  if (this.guildId < 0) {
    throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
  } else {
    param1.writeVarInt(this.guildId);
    param1.writeUTF(this.guildName);
    return;
  }
};

BasicGuildInformations.prototype.deserializeAs_BasicGuildInformations = function(input) {
  this.deserialize(param1);
  this.guildId = param1.readVarUhInt();
  if (this.guildId < 0) {
    throw new Error("Forbidden value (" + this.guildId + ") on element of BasicGuildInformations.guildId.");
  } else {
    this.guildName = param1.readUTF();
    return;
  }
};

BasicGuildInformations.prototype.getTypeId = function() {
  return 365;
};

BasicGuildInformations.prototype.getClassName = function() {
  return 'BasicGuildInformations';
};

module.exports.id = 365;
module.exports.class = BasicGuildInformations;