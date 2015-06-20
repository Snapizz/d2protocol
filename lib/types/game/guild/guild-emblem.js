var GuildEmblem = function() {
  this.symbolShape = 0;
  this.symbolColor = 0;
  this.backgroundShape = 0;
  this.backgroundColor = 0;
};



GuildEmblem.prototype.serialize = function(output) {
  this.serializeAs_GuildEmblem(output);
};

GuildEmblem.prototype.deserialize = function(input) {
  this.deserializeAs_GuildEmblem(input);
};

GuildEmblem.prototype.serializeAs_GuildEmblem = function(param1) {
  if (this.symbolShape < 0) {
    throw new Error("Forbidden value (" + this.symbolShape + ") on element symbolShape.");
  } else {
    param1.writeVarShort(this.symbolShape);
    param1.writeInt(this.symbolColor);
    if (this.backgroundShape < 0) {
      throw new Error("Forbidden value (" + this.backgroundShape + ") on element backgroundShape.");
    } else {
      param1.writeByte(this.backgroundShape);
      param1.writeInt(this.backgroundColor);
      return;
    }
  }
};

GuildEmblem.prototype.deserializeAs_GuildEmblem = function(param1) {
  this.symbolShape = param1.readVarUhShort();
  if (this.symbolShape < 0) {
    throw new Error("Forbidden value (" + this.symbolShape + ") on element of GuildEmblem.symbolShape.");
  } else {
    this.symbolColor = param1.readInt();
    this.backgroundShape = param1.readByte();
    if (this.backgroundShape < 0) {
      throw new Error("Forbidden value (" + this.backgroundShape + ") on element of GuildEmblem.backgroundShape.");
    } else {
      this.backgroundColor = param1.readInt();
      return;
    }
  }
};

GuildEmblem.prototype.getTypeId = function() {
  return 87;
};

GuildEmblem.prototype.getClassName = function() {
  return 'GuildEmblem';
};

module.exports.id = 87;
module.exports.class = GuildEmblem;
module.exports.getInstance = function() {
  return new GuildEmblem();
};