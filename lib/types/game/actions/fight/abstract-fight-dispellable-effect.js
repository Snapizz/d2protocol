var AbstractFightDispellableEffect = function() {
  this.uid = 0;
  this.targetId = 0;
  this.turnDuration = 0;
  this.dispelable = 1;
  this.spellId = 0;
  this.effectId = 0;
  this.parentBoostUid = 0;
};



AbstractFightDispellableEffect.prototype.serialize = function(output) {
  this.serializeAs_AbstractFightDispellableEffect(output);
};

AbstractFightDispellableEffect.prototype.deserialize = function(input) {
  this.deserializeAs_AbstractFightDispellableEffect(input);
};

AbstractFightDispellableEffect.prototype.serializeAs_AbstractFightDispellableEffect = function(output) {
  if (this.uid < 0) {
    throw (new Error((("Forbidden value (" + this.uid) + ") on element uid.")));
  };
  output.writeVarInt(this.uid);
  output.writeInt(this.targetId);
  output.writeShort(this.turnDuration);
  output.writeByte(this.dispelable);
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element spellId.")));
  };
  output.writeVarShort(this.spellId);
  if (this.effectId < 0) {
    throw (new Error((("Forbidden value (" + this.effectId) + ") on element effectId.")));
  };
  output.writeVarInt(this.effectId);
  if (this.parentBoostUid < 0) {
    throw (new Error((("Forbidden value (" + this.parentBoostUid) + ") on element parentBoostUid.")));
  };
  output.writeVarInt(this.parentBoostUid);
};

AbstractFightDispellableEffect.prototype.deserializeAs_AbstractFightDispellableEffect = function(input) {
  this.uid = input.readVarUhInt();
  if (this.uid < 0) {
    throw (new Error((("Forbidden value (" + this.uid) + ") on element of AbstractFightDispellableEffect.uid.")));
  };
  this.targetId = input.readInt();
  this.turnDuration = input.readShort();
  this.dispelable = input.readByte();
  if (this.dispelable < 0) {
    throw (new Error((("Forbidden value (" + this.dispelable) + ") on element of AbstractFightDispellableEffect.dispelable.")));
  };
  this.spellId = input.readVarUhShort();
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element of AbstractFightDispellableEffect.spellId.")));
  };
  this.effectId = input.readVarUhInt();
  if (this.effectId < 0) {
    throw (new Error((("Forbidden value (" + this.effectId) + ") on element of AbstractFightDispellableEffect.effectId.")));
  };
  this.parentBoostUid = input.readVarUhInt();
  if (this.parentBoostUid < 0) {
    throw (new Error((("Forbidden value (" + this.parentBoostUid) + ") on element of AbstractFightDispellableEffect.parentBoostUid.")));
  };
};

AbstractFightDispellableEffect.prototype.getTypeId = function() {
  return 206;
};

AbstractFightDispellableEffect.prototype.getClassName = function() {
  return 'AbstractFightDispellableEffect';
};

module.exports.id = 206;
module.exports.class = AbstractFightDispellableEffect;