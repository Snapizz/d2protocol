var BaseMessage = require('./game-role-play-named-actor-informations.js').class,
  util = require('util');

var GameRolePlayMountInformations = function() {
  this.ownerName = "";
  this.level = 0;
};

util.inherits(GameRolePlayMountInformations, BaseMessage);

GameRolePlayMountInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayMountInformations(output);
};

GameRolePlayMountInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayMountInformations(input);
};

GameRolePlayMountInformations.prototype.serializeAs_GameRolePlayMountInformations = function(output) {
  this.serializeAs_GameRolePlayNamedActorInformations(output);
  output.writeUTF(this.ownerName);
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
};

GameRolePlayMountInformations.prototype.deserializeAs_GameRolePlayMountInformations = function(input) {
  this.deserialize(input);
  this.ownerName = input.readUTF();
  this.level = input.readUnsignedByte();
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of GameRolePlayMountInformations.level.")));
  };
};

GameRolePlayMountInformations.prototype.getTypeId = function() {
  return 180;
};

GameRolePlayMountInformations.prototype.getClassName = function() {
  return 'GameRolePlayMountInformations';
};

module.exports.id = 180;
module.exports.class = GameRolePlayMountInformations;