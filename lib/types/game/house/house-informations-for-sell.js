var HouseInformationsForSell = function() {
  this.modelId = 0;
  this.ownerName = "";
  this.ownerConnected = false;
  this.worldX = 0;
  this.worldY = 0;
  this.subAreaId = 0;
  this.nbRoom = 0;
  this.nbChest = 0;
  this.skillListIds = [];
  this.isLocked = false;
  this.price = 0;
};



HouseInformationsForSell.prototype.serialize = function(output) {
  this.serializeAs_HouseInformationsForSell(output);
};

HouseInformationsForSell.prototype.deserialize = function(input) {
  this.deserializeAs_HouseInformationsForSell(input);
};

HouseInformationsForSell.prototype.serializeAs_HouseInformationsForSell = function(output) {
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element modelId.")));
  };
  output.writeVarInt(this.modelId);
  output.writeUTF(this.ownerName);
  output.writeBoolean(this.ownerConnected);
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
  output.writeByte(this.nbRoom);
  output.writeByte(this.nbChest);
  output.writeShort(this.skillListIds.length);
  var _i9 = 0;
  while (_i9 < this.skillListIds.length) {
    output.writeInt(this.skillListIds[_i9]);
    _i9++;
  };
  output.writeBoolean(this.isLocked);
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element price.")));
  };
  output.writeVarInt(this.price);
};

HouseInformationsForSell.prototype.deserializeAs_HouseInformationsForSell = function(input) {
  var _val9 = 0;
  this.modelId = input.readVarUhInt();
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element of HouseInformationsForSell.modelId.")));
  };
  this.ownerName = input.readUTF();
  this.ownerConnected = input.readBoolean();
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of HouseInformationsForSell.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of HouseInformationsForSell.worldY.")));
  };
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of HouseInformationsForSell.subAreaId.")));
  };
  this.nbRoom = input.readByte();
  this.nbChest = input.readByte();
  var _skillListIdsLen = input.readUnsignedShort();
  var _i9 = 0;
  while (_i9 < _skillListIdsLen) {
    _val9 = input.readInt();
    this.skillListIds.push(_val9);
    _i9++;
  };
  this.isLocked = input.readBoolean();
  this.price = input.readVarUhInt();
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element of HouseInformationsForSell.price.")));
  };
};

HouseInformationsForSell.prototype.getTypeId = function() {
  return 221;
};

HouseInformationsForSell.prototype.getClassName = function() {
  return 'HouseInformationsForSell';
};

module.exports.id = 221;
module.exports.class = HouseInformationsForSell;