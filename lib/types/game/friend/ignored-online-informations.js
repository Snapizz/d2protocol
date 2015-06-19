var BaseMessage = require('./ignored-informations.js').class,
  util = require('util');

var IgnoredOnlineInformations = function() {
  this.playerId = 0;
  this.playerName = "";
  this.breed = 0;
  this.sex = false;
};

util.inherits(IgnoredOnlineInformations, BaseMessage);

IgnoredOnlineInformations.prototype.serialize = function(output) {
  this.serializeAs_IgnoredOnlineInformations(output);
};

IgnoredOnlineInformations.prototype.deserialize = function(input) {
  this.deserializeAs_IgnoredOnlineInformations(input);
};

IgnoredOnlineInformations.prototype.serializeAs_IgnoredOnlineInformations = function(output) {
  this.serializeAs_IgnoredInformations(output);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  output.writeUTF(this.playerName);
  output.writeByte(this.breed);
  output.writeBoolean(this.sex);
};

IgnoredOnlineInformations.prototype.deserializeAs_IgnoredOnlineInformations = function(input) {
  this.deserialize(input);
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of IgnoredOnlineInformations.playerId.")));
  };
  this.playerName = input.readUTF();
  this.breed = input.readByte();
  if ((((this.breed < PlayableBreedEnum.Feca)) || ((this.breed > PlayableBreedEnum.Eliatrope)))) {
    throw (new Error((("Forbidden value (" + this.breed) + ") on element of IgnoredOnlineInformations.breed.")));
  };
  this.sex = input.readBoolean();
};

IgnoredOnlineInformations.prototype.getTypeId = function() {
  return 105;
};

IgnoredOnlineInformations.prototype.getClassName = function() {
  return 'IgnoredOnlineInformations';
};

module.exports.id = 105;
module.exports.class = IgnoredOnlineInformations;