var GameContextActorInformations = function() {
  this.contextualId = 0;
  this.look;
  this.disposition;
};



GameContextActorInformations.prototype.serialize = function(output) {
  this.serializeAs_GameContextActorInformations(output);
};

GameContextActorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextActorInformations(input);
};

GameContextActorInformations.prototype.serializeAs_GameContextActorInformations = function(param1) {
  param1.writeInt(this.contextualId);
  this.look.serializeAs_EntityLook(param1);
  param1.writeShort(this.disposition.getTypeId());
  this.disposition.serialize(param1);
};

GameContextActorInformations.prototype.deserializeAs_GameContextActorInformations = function(param1) {
  this.contextualId = param1.readInt();
  this.look = new EntityLook();
  this.look.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  this.disposition = ProtocolTypeManager.getInstance(EntityDispositionInformations, _loc2_);
  this.disposition.deserialize(param1);
};

GameContextActorInformations.prototype.getTypeId = function() {
  return 150;
};

GameContextActorInformations.prototype.getClassName = function() {
  return 'GameContextActorInformations';
};

module.exports.id = 150;
module.exports.class = GameContextActorInformations;