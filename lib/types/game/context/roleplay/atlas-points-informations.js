var AtlasPointsInformations = function() {
  this.type = 0;
  this.coords = [];
};



AtlasPointsInformations.prototype.serialize = function(output) {
  this.serializeAs_AtlasPointsInformations(output);
};

AtlasPointsInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AtlasPointsInformations(input);
};

AtlasPointsInformations.prototype.serializeAs_AtlasPointsInformations = function(output) {
  output.writeByte(this.type);
  output.writeShort(this.coords.length);
  var _i2;
  while (_i2 < this.coords.length) {
    (this.coords[_i2]).serializeAs_MapCoordinatesExtended(output);
    _i2++;
  };
};

AtlasPointsInformations.prototype.deserializeAs_AtlasPointsInformations = function(input) {
  var _item2;
  this.type = input.readByte();
  if (this.type < 0) {
    throw (new Error((("Forbidden value (" + this.type) + ") on element of AtlasPointsInformations.type.")));
  };
  var _coordsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _coordsLen) {
    _item2 = new MapCoordinatesExtended();
    _item2.deserialize(input);
    this.coords.push(_item2);
    _i2++;
  };
};

AtlasPointsInformations.prototype.getTypeId = function() {
  return 175;
};

AtlasPointsInformations.prototype.getClassName = function() {
  return 'AtlasPointsInformations';
};

module.exports.id = 175;
module.exports.class = AtlasPointsInformations;