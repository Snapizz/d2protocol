var FightDispellableEffectExtendedInformations = function() {
  this.actionId = 0;
  this.sourceId = 0;
  this.effect;
};



FightDispellableEffectExtendedInformations.prototype.serialize = function(output) {
  this.serializeAs_FightDispellableEffectExtendedInformations(output);
};

FightDispellableEffectExtendedInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightDispellableEffectExtendedInformations(input);
};

FightDispellableEffectExtendedInformations.prototype.serializeAs_FightDispellableEffectExtendedInformations = function(output) {
  if (this.actionId < 0) {
    throw (new Error((("Forbidden value (" + this.actionId) + ") on element actionId.")));
  };
  output.writeVarShort(this.actionId);
  output.writeInt(this.sourceId);
  output.writeShort(this.effect.getTypeId());
  this.effect.serialize(output);
};

FightDispellableEffectExtendedInformations.prototype.deserializeAs_FightDispellableEffectExtendedInformations = function(input) {
  this.actionId = input.readVarUhShort();
  if (this.actionId < 0) {
    throw (new Error((("Forbidden value (" + this.actionId) + ") on element of FightDispellableEffectExtendedInformations.actionId.")));
  };
  this.sourceId = input.readInt();
  var _id3 = input.readUnsignedShort();
  this.effect = ProtocolTypeManager.getInstance(AbstractFightDispellableEffect, _id3);
  this.effect.deserialize(input);
};

FightDispellableEffectExtendedInformations.prototype.getTypeId = function() {
  return 208;
};

FightDispellableEffectExtendedInformations.prototype.getClassName = function() {
  return 'FightDispellableEffectExtendedInformations';
};

module.exports.id = 208;
module.exports.class = FightDispellableEffectExtendedInformations;