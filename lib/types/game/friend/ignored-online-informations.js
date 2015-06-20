var IgnoredOnlineInformations = function() {
  this.playerId = 0;
  this.playerName = "";
  this.breed = 0;
  this.sex = false;
};



IgnoredOnlineInformations.prototype.serialize = function(output) {
  this.serializeAs_IgnoredOnlineInformations(output);
};

IgnoredOnlineInformations.prototype.deserialize = function(input) {
  this.deserializeAs_IgnoredOnlineInformations(input);
};

IgnoredOnlineInformations.prototype.serializeAs_IgnoredOnlineInformations = function(output) {
  this.serializeAs_IgnoredInformations(param1);
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
  } else {
    param1.writeVarInt(this.playerId);
    param1.writeUTF(this.playerName);
    param1.writeByte(this.breed);
    param1.writeBoolean(this.sex);
    return;
  }
};

IgnoredOnlineInformations.prototype.deserializeAs_IgnoredOnlineInformations = function(input) {
  this.deserialize(param1);
  this.playerId = param1.readVarUhInt();
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element of IgnoredOnlineInformations.playerId.");
  } else {
    this.playerName = param1.readUTF();
    this.breed = param1.readByte();
    if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
      throw new Error("Forbidden value (" + this.breed + ") on element of IgnoredOnlineInformations.breed.");
    } else {
      this.sex = param1.readBoolean();
      return;
    }
  }
};

IgnoredOnlineInformations.prototype.getTypeId = function() {
  return 105;
};

IgnoredOnlineInformations.prototype.getClassName = function() {
  return 'IgnoredOnlineInformations';
};

module.exports.id = 105;
module.exports.class = IgnoredOnlineInformations;