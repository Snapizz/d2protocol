var TreasureHuntFlag = function() {
  this.mapId = 0;
  this.state = 0;
};



TreasureHuntFlag.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntFlag(output);
};

TreasureHuntFlag.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntFlag(input);
};

TreasureHuntFlag.prototype.serializeAs_TreasureHuntFlag = function(output) {
  output.writeInt(this.mapId);
  output.writeByte(this.state);
};

TreasureHuntFlag.prototype.deserializeAs_TreasureHuntFlag = function(input) {
  this.mapId = input.readInt();
  this.state = input.readByte();
  if (this.state < 0) {
    throw (new Error((("Forbidden value (" + this.state) + ") on element of TreasureHuntFlag.state.")));
  };
};

TreasureHuntFlag.prototype.getTypeId = function() {
  return 473;
};

TreasureHuntFlag.prototype.getClassName = function() {
  return 'TreasureHuntFlag';
};

module.exports.id = 473;
module.exports.class = TreasureHuntFlag;