var RemodelingInformation = function() {
  this.name = "";
  this.breed = 0;
  this.sex = false;
  this.cosmeticId = 0;
  this.colors = [];
};



RemodelingInformation.prototype.serialize = function(output) {
  this.serializeAs_RemodelingInformation(output);
};

RemodelingInformation.prototype.deserialize = function(input) {
  this.deserializeAs_RemodelingInformation(input);
};

RemodelingInformation.prototype.serializeAs_RemodelingInformation = function(output) {
  output.writeUTF(this.name);
  output.writeByte(this.breed);
  output.writeBoolean(this.sex);
  if (this.cosmeticId < 0) {
    throw (new Error((("Forbidden value (" + this.cosmeticId) + ") on element cosmeticId.")));
  };
  output.writeVarShort(this.cosmeticId);
  output.writeShort(this.colors.length);
  var _i5;
  while (_i5 < this.colors.length) {
    output.writeInt(this.colors[_i5]);
    _i5++;
  };
};

RemodelingInformation.prototype.deserializeAs_RemodelingInformation = function(input) {
  var _val5;
  this.name = input.readUTF();
  this.breed = input.readByte();
  this.sex = input.readBoolean();
  this.cosmeticId = input.readVarUhShort();
  if (this.cosmeticId < 0) {
    throw (new Error((("Forbidden value (" + this.cosmeticId) + ") on element of RemodelingInformation.cosmeticId.")));
  };
  var _colorsLen = input.readUnsignedShort();
  var _i5;
  while (_i5 < _colorsLen) {
    _val5 = input.readInt();
    this.colors.push(_val5);
    _i5++;
  };
};

RemodelingInformation.prototype.getTypeId = function() {
  return 480;
};

RemodelingInformation.prototype.getClassName = function() {
  return 'RemodelingInformation';
};

module.exports.id = 480;
module.exports.class = RemodelingInformation;