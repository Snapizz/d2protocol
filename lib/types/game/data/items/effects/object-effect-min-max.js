var ObjectEffectMinMax = function() {
  this.min = 0;
  this.max = 0;
};



ObjectEffectMinMax.prototype.serialize = function(output) {
  this.serializeAs_ObjectEffectMinMax(output);
};

ObjectEffectMinMax.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectEffectMinMax(input);
};

ObjectEffectMinMax.prototype.serializeAs_ObjectEffectMinMax = function(output) {
  super.serializeAs_ObjectEffect(param1);
  if (this.min < 0) {
    throw new Error("Forbidden value (" + this.min + ") on element min.");
  } else {
    param1.writeVarInt(this.min);
    if (this.max < 0) {
      throw new Error("Forbidden value (" + this.max + ") on element max.");
    } else {
      param1.writeVarInt(this.max);
      return;
    }
  }
};

ObjectEffectMinMax.prototype.deserializeAs_ObjectEffectMinMax = function(input) {
  super.deserialize(param1);
  this.min = param1.readVarUhInt();
  if (this.min < 0) {
    throw new Error("Forbidden value (" + this.min + ") on element of ObjectEffectMinMax.min.");
  } else {
    this.max = param1.readVarUhInt();
    if (this.max < 0) {
      throw new Error("Forbidden value (" + this.max + ") on element of ObjectEffectMinMax.max.");
    } else {
      return;
    }
  }
};

ObjectEffectMinMax.prototype.getTypeId = function() {
  return 82;
};

ObjectEffectMinMax.prototype.getClassName = function() {
  return 'ObjectEffectMinMax';
};

module.exports.id = 82;
module.exports.class = ObjectEffectMinMax;