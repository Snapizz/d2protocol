var MapObstacle = function() {
  this.obstacleCellId = 0;
  this.state = 0;
};



MapObstacle.prototype.serialize = function(output) {
  this.serializeAs_MapObstacle(output);
};

MapObstacle.prototype.deserialize = function(input) {
  this.deserializeAs_MapObstacle(input);
};

MapObstacle.prototype.serializeAs_MapObstacle = function(output) {
  if ((((this.obstacleCellId < 0)) || ((this.obstacleCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.obstacleCellId) + ") on element obstacleCellId.")));
  };
  output.writeVarShort(this.obstacleCellId);
  output.writeByte(this.state);
};

MapObstacle.prototype.deserializeAs_MapObstacle = function(input) {
  this.obstacleCellId = input.readVarUhShort();
  if ((((this.obstacleCellId < 0)) || ((this.obstacleCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.obstacleCellId) + ") on element of MapObstacle.obstacleCellId.")));
  };
  this.state = input.readByte();
  if (this.state < 0) {
    throw (new Error((("Forbidden value (" + this.state) + ") on element of MapObstacle.state.")));
  };
};

MapObstacle.prototype.getTypeId = function() {
  return 200;
};

MapObstacle.prototype.getClassName = function() {
  return 'MapObstacle';
};

module.exports.id = 200;
module.exports.class = MapObstacle;