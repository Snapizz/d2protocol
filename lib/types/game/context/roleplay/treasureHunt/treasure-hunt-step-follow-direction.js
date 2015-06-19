var BaseMessage = require('./treasure-hunt-step.js').class,
  util = require('util');

var TreasureHuntStepFollowDirection = function() {
  this.direction = 1;
  this.mapCount = 0;
};

util.inherits(TreasureHuntStepFollowDirection, BaseMessage);

TreasureHuntStepFollowDirection.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntStepFollowDirection(output);
};

TreasureHuntStepFollowDirection.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntStepFollowDirection(input);
};

TreasureHuntStepFollowDirection.prototype.serializeAs_TreasureHuntStepFollowDirection = function(output) {
  this.serializeAs_TreasureHuntStep(output);
  output.writeByte(this.direction);
  if (this.mapCount < 0) {
    throw (new Error((("Forbidden value (" + this.mapCount) + ") on element mapCount.")));
  };
  output.writeVarShort(this.mapCount);
};

TreasureHuntStepFollowDirection.prototype.deserializeAs_TreasureHuntStepFollowDirection = function(input) {
  this.deserialize(input);
  this.direction = input.readByte();
  if (this.direction < 0) {
    throw (new Error((("Forbidden value (" + this.direction) + ") on element of TreasureHuntStepFollowDirection.direction.")));
  };
  this.mapCount = input.readVarUhShort();
  if (this.mapCount < 0) {
    throw (new Error((("Forbidden value (" + this.mapCount) + ") on element of TreasureHuntStepFollowDirection.mapCount.")));
  };
};

TreasureHuntStepFollowDirection.prototype.getTypeId = function() {
  return 468;
};

TreasureHuntStepFollowDirection.prototype.getClassName = function() {
  return 'TreasureHuntStepFollowDirection';
};

module.exports.id = 468;
module.exports.class = TreasureHuntStepFollowDirection;