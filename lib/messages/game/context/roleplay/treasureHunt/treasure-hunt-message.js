var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var TreasureHuntMessage = function() {
  this.questType = 0;
  this.startMapId = 0;
  this.knownStepsList = [];
  this.totalStepCount = 0;
  this.checkPointCurrent = 0;
  this.checkPointTotal = 0;
  this.availableRetryCount = 0;
  this.flags = [];
};

util.inherits(TreasureHuntMessage, BaseMessage);

TreasureHuntMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntMessage(output);
};

TreasureHuntMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntMessage(input);
};

TreasureHuntMessage.prototype.serializeAs_TreasureHuntMessage = function(param1) {
  param1.writeByte(this.questType);
  param1.writeInt(this.startMapId);
  param1.writeShort(this.knownStepsList.length);
  var _loc2_ = 0;
  while (_loc2_ < this.knownStepsList.length) {
    param1.writeShort((this.knownStepsList[_loc2_]).getTypeId());
    (this.knownStepsList[_loc2_]).serialize(param1);
    _loc2_++;
  }
  if (this.totalStepCount < 0) {
    throw new Error("Forbidden value (" + this.totalStepCount + ") on element totalStepCount.");
  } else {
    param1.writeByte(this.totalStepCount);
    if (this.checkPointCurrent < 0) {
      throw new Error("Forbidden value (" + this.checkPointCurrent + ") on element checkPointCurrent.");
    } else {
      param1.writeVarInt(this.checkPointCurrent);
      if (this.checkPointTotal < 0) {
        throw new Error("Forbidden value (" + this.checkPointTotal + ") on element checkPointTotal.");
      } else {
        param1.writeVarInt(this.checkPointTotal);
        param1.writeInt(this.availableRetryCount);
        param1.writeShort(this.flags.length);
        var _loc3_ = 0;
        while (_loc3_ < this.flags.length) {
          (this.flags[_loc3_]).serializeAs_TreasureHuntFlag(param1);
          _loc3_++;
        }
        return;
      }
    }
  }
};

TreasureHuntMessage.prototype.deserializeAs_TreasureHuntMessage = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = null;
  var _loc8_ = null;
  this.questType = param1.readByte();
  if (this.questType < 0) {
    throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntMessage.questType.");
  } else {
    this.startMapId = param1.readInt();
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc6_ = param1.readUnsignedShort();
      _loc7_ = ProtocolTypeManager.getInstance(TreasureHuntStep, _loc6_);
      _loc7_.deserialize(param1);
      this.knownStepsList.push(_loc7_);
      _loc3_++;
    }
    this.totalStepCount = param1.readByte();
    if (this.totalStepCount < 0) {
      throw new Error("Forbidden value (" + this.totalStepCount + ") on element of TreasureHuntMessage.totalStepCount.");
    } else {
      this.checkPointCurrent = param1.readVarUhInt();
      if (this.checkPointCurrent < 0) {
        throw new Error("Forbidden value (" + this.checkPointCurrent + ") on element of TreasureHuntMessage.checkPointCurrent.");
      } else {
        this.checkPointTotal = param1.readVarUhInt();
        if (this.checkPointTotal < 0) {
          throw new Error("Forbidden value (" + this.checkPointTotal + ") on element of TreasureHuntMessage.checkPointTotal.");
        } else {
          this.availableRetryCount = param1.readInt();
          var _loc4_ = param1.readUnsignedShort();
          var _loc5_ = 0;
          while (_loc5_ < _loc4_) {
            _loc8_ = new TreasureHuntFlag();
            _loc8_.deserialize(param1);
            this.flags.push(_loc8_);
            _loc5_++;
          }
          return;
        }
      }
    }
  }
};

TreasureHuntMessage.prototype.getMessageId = function() {
  return 6486;
};

TreasureHuntMessage.prototype.getClassName = function() {
  return 'TreasureHuntMessage';
};

module.exports.id = 6486;
module.exports.class = TreasureHuntMessage;
module.exports.getInstance = function() {
  return new TreasureHuntMessage();
};