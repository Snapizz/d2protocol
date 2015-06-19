var HouseInformations = function() {
  this.houseId = 0;
  this.doorsOnMap = [];
  this.ownerName = "";
  this.isOnSale = false;
  this.isSaleLocked = false;
  this.modelId = 0;
};



HouseInformations.prototype.serialize = function(output) {
  this.serializeAs_HouseInformations(output);
};

HouseInformations.prototype.deserialize = function(input) {
  this.deserializeAs_HouseInformations(input);
};

HouseInformations.prototype.serializeAs_HouseInformations = function(output) {
  var _box0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.isOnSale);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.isSaleLocked);
  output.writeByte(_box0);
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element houseId.")));
  };
  output.writeInt(this.houseId);
  output.writeShort(this.doorsOnMap.length);
  var _i2;
  while (_i2 < this.doorsOnMap.length) {
    if (this.doorsOnMap[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.doorsOnMap[_i2]) + ") on element 2 (starting at 1) of doorsOnMap.")));
    };
    output.writeInt(this.doorsOnMap[_i2]);
    _i2++;
  };
  output.writeUTF(this.ownerName);
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element modelId.")));
  };
  output.writeVarShort(this.modelId);
};

HouseInformations.prototype.deserializeAs_HouseInformations = function(input) {
  var _val2;
  var _box0 = input.readByte();
  this.isOnSale = BooleanByteWrapper.getFlag(_box0, 0);
  this.isSaleLocked = BooleanByteWrapper.getFlag(_box0, 1);
  this.houseId = input.readInt();
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element of HouseInformations.houseId.")));
  };
  var _doorsOnMapLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _doorsOnMapLen) {
    _val2 = input.readInt();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of doorsOnMap.")));
    };
    this.doorsOnMap.push(_val2);
    _i2++;
  };
  this.ownerName = input.readUTF();
  this.modelId = input.readVarUhShort();
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element of HouseInformations.modelId.")));
  };
};

HouseInformations.prototype.getTypeId = function() {
  return 111;
};

HouseInformations.prototype.getClassName = function() {
  return 'HouseInformations';
};

module.exports.id = 111;
module.exports.class = HouseInformations;