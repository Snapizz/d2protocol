var BaseMessage = require('./friend-informations.js').class,
  util = require('util');

var FriendOnlineInformations = function() {
  this.playerId = 0;
  this.playerName = "";
  this.level = 0;
  this.alignmentSide = 0;
  this.breed = 0;
  this.sex = false;
  this.guildInfo;
  this.moodSmileyId = 0;
  this.status;
};

util.inherits(FriendOnlineInformations, BaseMessage);

FriendOnlineInformations.prototype.serialize = function(output) {
  this.serializeAs_FriendOnlineInformations(output);
};

FriendOnlineInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FriendOnlineInformations(input);
};

FriendOnlineInformations.prototype.serializeAs_FriendOnlineInformations = function(output) {
  this.serializeAs_FriendInformations(output);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  output.writeUTF(this.playerName);
  if ((((this.level < 0)) || ((this.level > 200)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
  output.writeByte(this.alignmentSide);
  output.writeByte(this.breed);
  output.writeBoolean(this.sex);
  this.guildInfo.serializeAs_BasicGuildInformations(output);
  output.writeByte(this.moodSmileyId);
  output.writeShort(this.status.getTypeId());
  this.status.serialize(output);
};

FriendOnlineInformations.prototype.deserializeAs_FriendOnlineInformations = function(input) {
  this.deserialize(input);
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of FriendOnlineInformations.playerId.")));
  };
  this.playerName = input.readUTF();
  this.level = input.readUnsignedByte();
  if ((((this.level < 0)) || ((this.level > 200)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of FriendOnlineInformations.level.")));
  };
  this.alignmentSide = input.readByte();
  this.breed = input.readByte();
  if ((((this.breed < PlayableBreedEnum.Feca)) || ((this.breed > PlayableBreedEnum.Eliatrope)))) {
    throw (new Error((("Forbidden value (" + this.breed) + ") on element of FriendOnlineInformations.breed.")));
  };
  this.sex = input.readBoolean();
  this.guildInfo = new BasicGuildInformations();
  this.guildInfo.deserialize(input);
  this.moodSmileyId = input.readByte();
  var _id9 = input.readUnsignedShort();
  this.status = ProtocolTypeManager.getInstance(PlayerStatus, _id9);
  this.status.deserialize(input);
};

FriendOnlineInformations.prototype.getTypeId = function() {
  return 92;
};

FriendOnlineInformations.prototype.getClassName = function() {
  return 'FriendOnlineInformations';
};

module.exports.id = 92;
module.exports.class = FriendOnlineInformations;