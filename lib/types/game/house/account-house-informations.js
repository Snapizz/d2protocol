var AccountHouseInformations = function() {
  this.houseId = 0;
  this.modelId = 0;
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
};



AccountHouseInformations.prototype.serialize = function(output) {
  this.serializeAs_AccountHouseInformations(output);
};

AccountHouseInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AccountHouseInformations(input);
};

AccountHouseInformations.prototype.serializeAs_AccountHouseInformations = function(output) {
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element houseId.")));
  };
  output.writeInt(this.houseId);
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element modelId.")));
  };
  output.writeVarShort(this.modelId);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  output.writeInt(this.mapId);
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
};

AccountHouseInformations.prototype.deserializeAs_AccountHouseInformations = function(input) {
  this.houseId = input.readInt();
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element of AccountHouseInformations.houseId.")));
  };
  this.modelId = input.readVarUhShort();
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element of AccountHouseInformations.modelId.")));
  };
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of AccountHouseInformations.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of AccountHouseInformations.worldY.")));
  };
  this.mapId = input.readInt();
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of AccountHouseInformations.subAreaId.")));
  };
};

AccountHouseInformations.prototype.getTypeId = function() {
  return 390;
};

AccountHouseInformations.prototype.getClassName = function() {
  return 'AccountHouseInformations';
};

module.exports.id = 390;
module.exports.class = AccountHouseInformations;