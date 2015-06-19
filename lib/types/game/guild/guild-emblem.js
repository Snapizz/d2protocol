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

GuildEmblem.prototype.serializeAs_GuildEmblem = function(output) {
  if (this.symbolShape < 0) {
    throw (new Error((("Forbidden value (" + this.symbolShape) + ") on element symbolShape.")));
  };
  output.writeVarShort(this.symbolShape);
  output.writeInt(this.symbolColor);
  if (this.backgroundShape < 0) {
    throw (new Error((("Forbidden value (" + this.backgroundShape) + ") on element backgroundShape.")));
  };
  output.writeByte(this.backgroundShape);
  output.writeInt(this.backgroundColor);
};

GuildEmblem.prototype.deserializeAs_GuildEmblem = function(input) {
  this.symbolShape = input.readVarUhShort();
  if (this.symbolShape < 0) {
    throw (new Error((("Forbidden value (" + this.symbolShape) + ") on element of GuildEmblem.symbolShape.")));
  };
  this.symbolColor = input.readInt();
  this.backgroundShape = input.readByte();
  if (this.backgroundShape < 0) {
    throw (new Error((("Forbidden value (" + this.backgroundShape) + ") on element of GuildEmblem.backgroundShape.")));
  };
  this.backgroundColor = input.readInt();
};

GuildEmblem.prototype.getTypeId = function() {
  return 87;
};

GuildEmblem.prototype.getClassName = function() {
  return 'GuildEmblem';
};

module.exports.id = 87;
module.exports.class = GuildEmblem;