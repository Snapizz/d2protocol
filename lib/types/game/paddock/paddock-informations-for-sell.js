var PaddockInformationsForSell = function() {
  this.guildOwner = "";
  this.worldX = 0;
  this.worldY = 0;
  this.subAreaId = 0;
  this.nbMount = 0;
  this.nbObject = 0;
  this.price = 0;
};



PaddockInformationsForSell.prototype.serialize = function(output) {
  this.serializeAs_PaddockInformationsForSell(output);
};

PaddockInformationsForSell.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockInformationsForSell(input);
};

PaddockInformationsForSell.prototype.serializeAs_PaddockInformationsForSell = function(output) {
  output.writeUTF(this.guildOwner);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  output.writeByte(this.nbMount);
  output.writeByte(this.nbObject);
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element price.")));
  };
  output.writeVarInt(this.price);
};

PaddockInformationsForSell.prototype.deserializeAs_PaddockInformationsForSell = function(input) {
  this.guildOwner = input.readUTF();
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of PaddockInformationsForSell.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of PaddockInformationsForSell.worldY.")));
  };
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PaddockInformationsForSell.subAreaId.")));
  };
  this.nbMount = input.readByte();
  this.nbObject = input.readByte();
  this.price = input.readVarUhInt();
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element of PaddockInformationsForSell.price.")));
  };
};

PaddockInformationsForSell.prototype.getTypeId = function() {
  return 222;
};

PaddockInformationsForSell.prototype.getClassName = function() {
  return 'PaddockInformationsForSell';
};

module.exports.id = 222;
module.exports.class = PaddockInformationsForSell;