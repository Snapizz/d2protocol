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

MapCoordinates.prototype.serializeAs_MapCoordinates = function(param1) {
  if (this.worldX < -255 || this.worldX > 255) {
    throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
  } else {
    param1.writeShort(this.worldX);
    if (this.worldY < -255 || this.worldY > 255) {
      throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
    } else {
      param1.writeShort(this.worldY);
      return;
    }
  }
};

MapCoordinates.prototype.deserializeAs_MapCoordinates = function(param1) {
  this.worldX = param1.readShort();
  if (this.worldX < -255 || this.worldX > 255) {
    throw new Error("Forbidden value (" + this.worldX + ") on element of MapCoordinates.worldX.");
  } else {
    this.worldY = param1.readShort();
    if (this.worldY < -255 || this.worldY > 255) {
      throw new Error("Forbidden value (" + this.worldY + ") on element of MapCoordinates.worldY.");
    } else {
      return;
    }
  }
};

MapCoordinates.prototype.getTypeId = function() {
  return 174;
};

MapCoordinates.prototype.getClassName = function() {
  return 'MapCoordinates';
};

module.exports.id = 174;
module.exports.class = MapCoordinates;
module.exports.getInstance = function() {
  return new MapCoordinates();
};