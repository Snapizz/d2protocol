var BaseMessage = require('./game-role-play-actor-informations.js').class,
  util = require('util');

var GameRolePlayPrismInformations = function() {
  this.prism;
};

util.inherits(GameRolePlayPrismInformations, BaseMessage);

GameRolePlayPrismInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayPrismInformations(output);
};

GameRolePlayPrismInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayPrismInformations(input);
};

GameRolePlayPrismInformations.prototype.serializeAs_GameRolePlayPrismInformations = function(output) {
  this.serializeAs_GameRolePlayActorInformations(output);
  output.writeShort(this.prism.getTypeId());
  this.prism.serialize(output);
};

GameRolePlayPrismInformations.prototype.deserializeAs_GameRolePlayPrismInformations = function(input) {
  this.deserialize(input);
  var _id1 = input.readUnsignedShort();
  this.prism = ProtocolTypeManager.getInstance(PrismInformation, _id1);
  this.prism.deserialize(input);
};

GameRolePlayPrismInformations.prototype.getTypeId = function() {
  return 161;
};

GameRolePlayPrismInformations.prototype.getClassName = function() {
  return 'GameRolePlayPrismInformations';
};

module.exports.id = 161;
module.exports.class = GameRolePlayPrismInformations;