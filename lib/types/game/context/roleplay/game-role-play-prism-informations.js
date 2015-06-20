var GameRolePlayPrismInformations = function() {
  this.prism;
};



GameRolePlayPrismInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayPrismInformations(output);
};

GameRolePlayPrismInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayPrismInformations(input);
};

GameRolePlayPrismInformations.prototype.serializeAs_GameRolePlayPrismInformations = function(output) {
  this.serializeAs_GameRolePlayActorInformations(param1);
  param1.writeShort(this.prism.getTypeId());
  this.prism.serialize(param1);
};

GameRolePlayPrismInformations.prototype.deserializeAs_GameRolePlayPrismInformations = function(input) {
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  this.prism = ProtocolTypeManager.getInstance(PrismInformation, _loc2_);
  this.prism.deserialize(param1);
};

GameRolePlayPrismInformations.prototype.getTypeId = function() {
  return 161;
};

GameRolePlayPrismInformations.prototype.getClassName = function() {
  return 'GameRolePlayPrismInformations';
};

module.exports.id = 161;
module.exports.class = GameRolePlayPrismInformations;