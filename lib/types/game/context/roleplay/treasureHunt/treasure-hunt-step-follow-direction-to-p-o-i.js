var BaseMessage = require('./treasure-hunt-step.js').class,
  util = require('util');

var TreasureHuntStepFollowDirectionToPOI = function() {
  this.direction = 1;
  this.poiLabelId = 0;
};

util.inherits(TreasureHuntStepFollowDirectionToPOI, BaseMessage);

TreasureHuntStepFollowDirectionToPOI.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntStepFollowDirectionToPOI(output);
};

TreasureHuntStepFollowDirectionToPOI.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntStepFollowDirectionToPOI(input);
};

TreasureHuntStepFollowDirectionToPOI.prototype.serializeAs_TreasureHuntStepFollowDirectionToPOI = function(output) {
  this.serializeAs_TreasureHuntStep(output);
  output.writeByte(this.direction);
  if (this.poiLabelId < 0) {
    throw (new Error((("Forbidden value (" + this.poiLabelId) + ") on element poiLabelId.")));
  };
  output.writeVarShort(this.poiLabelId);
};

TreasureHuntStepFollowDirectionToPOI.prototype.deserializeAs_TreasureHuntStepFollowDirectionToPOI = function(input) {
  this.deserialize(input);
  this.direction = input.readByte();
  if (this.direction < 0) {
    throw (new Error((("Forbidden value (" + this.direction) + ") on element of TreasureHuntStepFollowDirectionToPOI.direction.")));
  };
  this.poiLabelId = input.readVarUhShort();
  if (this.poiLabelId < 0) {
    throw (new Error((("Forbidden value (" + this.poiLabelId) + ") on element of TreasureHuntStepFollowDirectionToPOI.poiLabelId.")));
  };
};

TreasureHuntStepFollowDirectionToPOI.prototype.getTypeId = function() {
  return 461;
};

TreasureHuntStepFollowDirectionToPOI.prototype.getClassName = function() {
  return 'TreasureHuntStepFollowDirectionToPOI';
};

module.exports.id = 461;
module.exports.class = TreasureHuntStepFollowDirectionToPOI;