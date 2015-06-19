var BaseMessage = require('./game-role-play-named-actor-informations.js').class,
  util = require('util');

var GameRolePlayHumanoidInformations = function() {
  this.humanoidInfo;
  this.accountId = 0;
};

util.inherits(GameRolePlayHumanoidInformations, BaseMessage);

GameRolePlayHumanoidInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayHumanoidInformations(output);
};

GameRolePlayHumanoidInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayHumanoidInformations(input);
};

GameRolePlayHumanoidInformations.prototype.serializeAs_GameRolePlayHumanoidInformations = function(output) {
  this.serializeAs_GameRolePlayNamedActorInformations(output);
  output.writeShort(this.humanoidInfo.getTypeId());
  this.humanoidInfo.serialize(output);
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element accountId.")));
  };
  output.writeInt(this.accountId);
};

GameRolePlayHumanoidInformations.prototype.deserializeAs_GameRolePlayHumanoidInformations = function(input) {
  this.deserialize(input);
  var _id1 = input.readUnsignedShort();
  this.humanoidInfo = ProtocolTypeManager.getInstance(HumanInformations, _id1);
  this.humanoidInfo.deserialize(input);
  this.accountId = input.readInt();
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element of GameRolePlayHumanoidInformations.accountId.")));
  };
};

GameRolePlayHumanoidInformations.prototype.getTypeId = function() {
  return 159;
};

GameRolePlayHumanoidInformations.prototype.getClassName = function() {
  return 'GameRolePlayHumanoidInformations';
};

module.exports.id = 159;
module.exports.class = GameRolePlayHumanoidInformations;