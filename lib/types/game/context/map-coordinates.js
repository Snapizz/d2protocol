var MapCoordinates = function() {
  this.worldX = 0;
  this.worldY = 0;
};



MapCoordinates.prototype.serialize = function(output) {
  this.serializeAs_MapCoordinates(output);
};

MapCoordinates.prototype.deserialize = function(input) {
  this.deserializeAs_MapCoordinates(input);
};

MapCoordinates.prototype.serializeAs_MapCoordinates = function(output) {
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
};

MapCoordinates.prototype.deserializeAs_MapCoordinates = function(input) {
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of MapCoordinates.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of MapCoordinates.worldY.")));
  };
};

MapCoordinates.prototype.getTypeId = function() {
  return 174;
};

MapCoordinates.prototype.getClassName = function() {
  return 'MapCoordinates';
};

module.exports.id = 174;
module.exports.class = MapCoordinates;