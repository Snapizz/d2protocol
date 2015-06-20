var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ChallengeTargetsListMessage = function() {
  this.targetIds = [];
  this.targetCells = [];
};

util.inherits(ChallengeTargetsListMessage, BaseMessage);

ChallengeTargetsListMessage.prototype.serialize = function(output) {
  this.serializeAs_ChallengeTargetsListMessage(output);
};

ChallengeTargetsListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChallengeTargetsListMessage(input);
};

ChallengeTargetsListMessage.prototype.serializeAs_ChallengeTargetsListMessage = function(param1) {
  param1.writeShort(this.targetIds.length);
  var _loc2_ = 0;
  while (_loc2_ < this.targetIds.length) {
    param1.writeInt(this.targetIds[_loc2_]);
    _loc2_++;
  }
  param1.writeShort(this.targetCells.length);
  var _loc3_ = 0;
  while (_loc3_ < this.targetCells.length) {
    if (this.targetCells[_loc3_] < -1 || this.targetCells[_loc3_] > 559) {
      throw new Error("Forbidden value (" + this.targetCells[_loc3_] + ") on element 2 (starting at 1) of targetCells.");
    } else {
      param1.writeShort(this.targetCells[_loc3_]);
      _loc3_++;
      continue;
    }
  }
};

ChallengeTargetsListMessage.prototype.deserializeAs_ChallengeTargetsListMessage = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = param1.readInt();
    this.targetIds.push(_loc6_);
    _loc3_++;
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc7_ = param1.readShort();
    if (_loc7_ < -1 || _loc7_ > 559) {
      throw new Error("Forbidden value (" + _loc7_ + ") on elements of targetCells.");
    } else {
      this.targetCells.push(_loc7_);
      _loc5_++;
      continue;
    }
  }
};

ChallengeTargetsListMessage.prototype.getMessageId = function() {
  return 5613;
};

ChallengeTargetsListMessage.prototype.getClassName = function() {
  return 'ChallengeTargetsListMessage';
};

module.exports.id = 5613;
module.exports.class = ChallengeTargetsListMessage;
module.exports.getInstance = function() {
  return new ChallengeTargetsListMessage();
};