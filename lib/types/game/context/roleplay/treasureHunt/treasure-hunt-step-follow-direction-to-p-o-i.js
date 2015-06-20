var TreasureHuntStepFollowDirectionToPOI = function() {
  this.direction = 1;
  this.poiLabelId = 0;
};



TreasureHuntStepFollowDirectionToPOI.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntStepFollowDirectionToPOI(output);
};

TreasureHuntStepFollowDirectionToPOI.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntStepFollowDirectionToPOI(input);
};

TreasureHuntStepFollowDirectionToPOI.prototype.serializeAs_TreasureHuntStepFollowDirectionToPOI = function(param1) {
  this.serializeAs_TreasureHuntStep(param1);
  param1.writeByte(this.direction);
  if (this.poiLabelId < 0) {
    throw new Error("Forbidden value (" + this.poiLabelId + ") on element poiLabelId.");
  } else {
    param1.writeVarShort(this.poiLabelId);
    return;
  }
};

TreasureHuntStepFollowDirectionToPOI.prototype.deserializeAs_TreasureHuntStepFollowDirectionToPOI = function(param1) {
  super.deserialize(param1);
  this.direction = param1.readByte();
  if (this.direction < 0) {
    throw new Error("Forbidden value (" + this.direction + ") on element of TreasureHuntStepFollowDirectionToPOI.direction.");
  } else {
    this.poiLabelId = param1.readVarUhShort();
    if (this.poiLabelId < 0) {
      throw new Error("Forbidden value (" + this.poiLabelId + ") on element of TreasureHuntStepFollowDirectionToPOI.poiLabelId.");
    } else {
      return;
    }
  }
};

TreasureHuntStepFollowDirectionToPOI.prototype.getTypeId = function() {
  return 461;
};

TreasureHuntStepFollowDirectionToPOI.prototype.getClassName = function() {
  return 'TreasureHuntStepFollowDirectionToPOI';
};

module.exports.id = 461;
module.exports.class = TreasureHuntStepFollowDirectionToPOI;
module.exports.getInstance = function() {
  return new TreasureHuntStepFollowDirectionToPOI();
};