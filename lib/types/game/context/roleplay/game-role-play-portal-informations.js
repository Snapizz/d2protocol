var BaseMessage = require('./game-role-play-actor-informations.js').class,
  util = require('util');

var GameRolePlayPortalInformations = function() {
  this.portal;
};

util.inherits(GameRolePlayPortalInformations, BaseMessage);

GameRolePlayPortalInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayPortalInformations(output);
};

GameRolePlayPortalInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayPortalInformations(input);
};

GameRolePlayPortalInformations.prototype.serializeAs_GameRolePlayPortalInformations = function(output) {
  this.serializeAs_GameRolePlayActorInformations(output);
  output.writeShort(this.portal.getTypeId());
  this.portal.serialize(output);
};

GameRolePlayPortalInformations.prototype.deserializeAs_GameRolePlayPortalInformations = function(input) {
  this.deserialize(input);
  var _id1 = input.readUnsignedShort();
  this.portal = ProtocolTypeManager.getInstance(PortalInformation, _id1);
  this.portal.deserialize(input);
};

GameRolePlayPortalInformations.prototype.getTypeId = function() {
  return 467;
};

GameRolePlayPortalInformations.prototype.getClassName = function() {
  return 'GameRolePlayPortalInformations';
};

module.exports.id = 467;
module.exports.class = GameRolePlayPortalInformations;