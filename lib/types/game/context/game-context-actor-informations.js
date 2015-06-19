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

GameContextActorInformations.prototype.serializeAs_GameContextActorInformations = function(output) {
  output.writeInt(this.contextualId);
  this.look.serializeAs_EntityLook(output);
  output.writeShort(this.disposition.getTypeId());
  this.disposition.serialize(output);
};

GameContextActorInformations.prototype.deserializeAs_GameContextActorInformations = function(input) {
  this.contextualId = input.readInt();
  this.look = new EntityLook();
  this.look.deserialize(input);
  var _id3 = input.readUnsignedShort();
  this.disposition = ProtocolTypeManager.getInstance(EntityDispositionInformations, _id3);
  this.disposition.deserialize(input);
};

GameContextActorInformations.prototype.getTypeId = function() {
  return 150;
};

GameContextActorInformations.prototype.getClassName = function() {
  return 'GameContextActorInformations';
};

module.exports.id = 150;
module.exports.class = GameContextActorInformations;