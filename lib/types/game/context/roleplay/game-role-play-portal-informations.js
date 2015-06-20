var GameRolePlayPortalInformations = function() {
  this.portal;
};



GameRolePlayPortalInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayPortalInformations(output);
};

GameRolePlayPortalInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayPortalInformations(input);
};

GameRolePlayPortalInformations.prototype.serializeAs_GameRolePlayPortalInformations = function(output) {
  this.serializeAs_GameRolePlayActorInformations(param1);
  param1.writeShort(this.portal.getTypeId());
  this.portal.serialize(param1);
};

GameRolePlayPortalInformations.prototype.deserializeAs_GameRolePlayPortalInformations = function(input) {
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