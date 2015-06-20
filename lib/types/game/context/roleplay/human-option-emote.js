var HumanOptionEmote = function() {
  this.emoteId = 0;
  this.emoteStartTime = 0;
};



HumanOptionEmote.prototype.serialize = function(output) {
  this.serializeAs_HumanOptionEmote(output);
};

HumanOptionEmote.prototype.deserialize = function(input) {
  this.deserializeAs_HumanOptionEmote(input);
};

HumanOptionEmote.prototype.serializeAs_HumanOptionEmote = function(param1) {
  this.serializeAs_HumanOption(param1);
  if (this.emoteId < 0 || this.emoteId > 255) {
    throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
  } else {
    param1.writeByte(this.emoteId);
    if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.emoteStartTime + ") on element emoteStartTime.");
    } else {
      param1.writeDouble(this.emoteStartTime);
      return;
    }
  }
};

HumanOptionEmote.prototype.deserializeAs_HumanOptionEmote = function(param1) {
  this.deserialize(param1);
  this.emoteId = param1.readUnsignedByte();
  if (this.emoteId < 0 || this.emoteId > 255) {
    throw new Error("Forbidden value (" + this.emoteId + ") on element of HumanOptionEmote.emoteId.");
  } else {
    this.emoteStartTime = param1.readDouble();
    if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.emoteStartTime + ") on element of HumanOptionEmote.emoteStartTime.");
    } else {
      return;
    }
  }
};

HumanOptionEmote.prototype.getTypeId = function() {
  return 407;
};

HumanOptionEmote.prototype.getClassName = function() {
  return 'HumanOptionEmote';
};

module.exports.id = 407;
module.exports.class = HumanOptionEmote;