var BaseMessage = require('./game-role-play-portal-informations.js').class,
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

GameRolePlayPortalInformations.prototype.serializeAs_GameRolePlayPortalInformations = function(param1) {
  this.serializeAs_GameRolePlayActorInformations(param1);
  param1.writeShort(this.portal.getTypeId());
  this.portal.serialize(param1);
};

GameRolePlayPortalInformations.prototype.deserializeAs_GameRolePlayPortalInformations = function(param1) {
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  this.portal = ProtocolTypeManager.getInstance(PortalInformation, _loc2_);
  this.portal.deserialize(param1);
};

GameRolePlayPortalInformations.prototype.getTypeId = function() {
  return 467;
};

GameRolePlayPortalInformations.prototype.getClassName = function() {
  return 'GameRolePlayPortalInformations';
};

module.exports.id = 467;
module.exports.class = GameRolePlayPortalInformations;
module.exports.getInstance = function() {
  return new GameRolePlayPortalInformations();
};