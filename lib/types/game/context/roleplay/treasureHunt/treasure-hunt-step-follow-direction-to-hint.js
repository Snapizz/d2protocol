var BaseMessage = require('./treasure-hunt-step.js').class,
  util = require('util');

var TreasureHuntStepFollowDirectionToHint = function() {
  this.direction = 1;
  this.npcId = 0;
};

util.inherits(TreasureHuntStepFollowDirectionToHint, BaseMessage);

TreasureHuntStepFollowDirectionToHint.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntStepFollowDirectionToHint(output);
};

TreasureHuntStepFollowDirectionToHint.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntStepFollowDirectionToHint(input);
};

TreasureHuntStepFollowDirectionToHint.prototype.serializeAs_TreasureHuntStepFollowDirectionToHint = function(output) {
  this.serializeAs_TreasureHuntStep(output);
  output.writeByte(this.direction);
  if (this.npcId < 0) {
    throw (new Error((("Forbidden value (" + this.npcId) + ") on element npcId.")));
  };
  output.writeVarShort(this.npcId);
};

TreasureHuntStepFollowDirectionToHint.prototype.deserializeAs_TreasureHuntStepFollowDirectionToHint = function(input) {
  this.deserialize(input);
  this.direction = input.readByte();
  if (this.direction < 0) {
    throw (new Error((("Forbidden value (" + this.direction) + ") on element of TreasureHuntStepFollowDirectionToHint.direction.")));
  };
  this.npcId = input.readVarUhShort();
  if (this.npcId < 0) {
    throw (new Error((("Forbidden value (" + this.npcId) + ") on element of TreasureHuntStepFollowDirectionToHint.npcId.")));
  };
};

TreasureHuntStepFollowDirectionToHint.prototype.getTypeId = function() {
  return 472;
};

TreasureHuntStepFollowDirectionToHint.prototype.getClassName = function() {
  return 'TreasureHuntStepFollowDirectionToHint';
};

module.exports.id = 472;
module.exports.class = TreasureHuntStepFollowDirectionToHint;