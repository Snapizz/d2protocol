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

MapObstacle.prototype.serializeAs_MapObstacle = function(param1) {
  if (this.obstacleCellId < 0 || this.obstacleCellId > 559) {
    throw new Error("Forbidden value (" + this.obstacleCellId + ") on element obstacleCellId.");
  } else {
    param1.writeVarShort(this.obstacleCellId);
    param1.writeByte(this.state);
    return;
  }
};

MapObstacle.prototype.deserializeAs_MapObstacle = function(param1) {
  this.obstacleCellId = param1.readVarUhShort();
  if (this.obstacleCellId < 0 || this.obstacleCellId > 559) {
    throw new Error("Forbidden value (" + this.obstacleCellId + ") on element of MapObstacle.obstacleCellId.");
  } else {
    this.state = param1.readByte();
    if (this.state < 0) {
      throw new Error("Forbidden value (" + this.state + ") on element of MapObstacle.state.");
    } else {
      return;
    }
  }
};

MapObstacle.prototype.getTypeId = function() {
  return 200;
};

MapObstacle.prototype.getClassName = function() {
  return 'MapObstacle';
};

module.exports.id = 200;
module.exports.class = MapObstacle;
module.exports.getInstance = function() {
  return new MapObstacle();
};