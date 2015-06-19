var HouseInformationsInside = function() {
  this.houseId = 0;
  this.modelId = 0;
  this.ownerId = 0;
  this.ownerName = "";
  this.worldX = 0;
  this.worldY = 0;
  this.price = 0;
  this.isLocked = false;
};



HouseInformationsInside.prototype.serialize = function(output) {
  this.serializeAs_HouseInformationsInside(output);
};

HouseInformationsInside.prototype.deserialize = function(input) {
  this.deserializeAs_HouseInformationsInside(input);
};

HouseInformationsInside.prototype.serializeAs_HouseInformationsInside = function(output) {
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element houseId.")));
  };
  output.writeInt(this.houseId);
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element modelId.")));
  };
  output.writeVarShort(this.modelId);
  output.writeInt(this.ownerId);
  output.writeUTF(this.ownerName);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element price.")));
  };
  output.writeInt(this.price);
  output.writeBoolean(this.isLocked);
};

HouseInformationsInside.prototype.deserializeAs_HouseInformationsInside = function(input) {
  this.houseId = input.readInt();
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element of HouseInformationsInside.houseId.")));
  };
  this.modelId = input.readVarUhShort();
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element of HouseInformationsInside.modelId.")));
  };
  this.ownerId = input.readInt();
  this.ownerName = input.readUTF();
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of HouseInformationsInside.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of HouseInformationsInside.worldY.")));
  };
  this.price = input.readInt();
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element of HouseInformationsInside.price.")));
  };
  this.isLocked = input.readBoolean();
};

HouseInformationsInside.prototype.getTypeId = function() {
  return 218;
};

HouseInformationsInside.prototype.getClassName = function() {
  return 'HouseInformationsInside';
};

module.exports.id = 218;
module.exports.class = HouseInformationsInside;