var ObjectEffectDuration = function() {
  this.days = 0;
  this.hours = 0;
  this.minutes = 0;
};



ObjectEffectDuration.prototype.serialize = function(output) {
  this.serializeAs_ObjectEffectDuration(output);
};

ObjectEffectDuration.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectEffectDuration(input);
};

ObjectEffectDuration.prototype.serializeAs_ObjectEffectDuration = function(output) {
  super.serializeAs_ObjectEffect(param1);
  if (this.days < 0) {
    throw new Error("Forbidden value (" + this.days + ") on element days.");
  } else {
    param1.writeVarShort(this.days);
    if (this.hours < 0) {
      throw new Error("Forbidden value (" + this.hours + ") on element hours.");
    } else {
      param1.writeByte(this.hours);
      if (this.minutes < 0) {
        throw new Error("Forbidden value (" + this.minutes + ") on element minutes.");
      } else {
        param1.writeByte(this.minutes);
        return;
      }
    }
  }
};

ObjectEffectDuration.prototype.deserializeAs_ObjectEffectDuration = function(input) {
  super.deserialize(param1);
  this.days = param1.readVarUhShort();
  if (this.days < 0) {
    throw new Error("Forbidden value (" + this.days + ") on element of ObjectEffectDuration.days.");
  } else {
    this.hours = param1.readByte();
    if (this.hours < 0) {
      throw new Error("Forbidden value (" + this.hours + ") on element of ObjectEffectDuration.hours.");
    } else {
      this.minutes = param1.readByte();
      if (this.minutes < 0) {
        throw new Error("Forbidden value (" + this.minutes + ") on element of ObjectEffectDuration.minutes.");
      } else {
        return;
      }
    }
  }
};

ObjectEffectDuration.prototype.getTypeId = function() {
  return 75;
};

ObjectEffectDuration.prototype.getClassName = function() {
  return 'ObjectEffectDuration';
};

module.exports.id = 75;
module.exports.class = ObjectEffectDuration;