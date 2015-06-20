var d2com = require('d2com'),
  BaseMessage = require('./koh-update-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var BasicAllianceInformations = require('../../../types/game/context/roleplay/basic-alliance-informations.js').class;

var KohUpdateMessage = function() {
  this.alliances = [];
  this.allianceNbMembers = [];
  this.allianceRoundWeigth = [];
  this.allianceMatchScore = [];
  this.allianceMapWinner = new BasicAllianceInformations();
  this.allianceMapWinnerScore = 0;
  this.allianceMapMyAllianceScore = 0;
  this.nextTickTime = 0;
};

util.inherits(KohUpdateMessage, BaseMessage);

KohUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_KohUpdateMessage(output);
};

KohUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_KohUpdateMessage(input);
};

KohUpdateMessage.prototype.serializeAs_KohUpdateMessage = function(param1) {
  param1.writeShort(this.alliances.length);
  var _loc2_ = 0;
  while (_loc2_ < this.alliances.length) {
    (this.alliances[_loc2_]).serializeAs_AllianceInformations(param1);
    _loc2_++;
  }
  param1.writeShort(this.allianceNbMembers.length);
  var _loc3_ = 0;
  while (_loc3_ < this.allianceNbMembers.length) {
    if (this.allianceNbMembers[_loc3_] < 0) {
      throw new Error("Forbidden value (" + this.allianceNbMembers[_loc3_] + ") on element 2 (starting at 1) of allianceNbMembers.");
    } else {
      param1.writeVarShort(this.allianceNbMembers[_loc3_]);
      _loc3_++;
      continue;
    }
  }
  param1.writeShort(this.allianceRoundWeigth.length);
  var _loc4_ = 0;
  while (_loc4_ < this.allianceRoundWeigth.length) {
    if (this.allianceRoundWeigth[_loc4_] < 0) {
      throw new Error("Forbidden value (" + this.allianceRoundWeigth[_loc4_] + ") on element 3 (starting at 1) of allianceRoundWeigth.");
    } else {
      param1.writeVarInt(this.allianceRoundWeigth[_loc4_]);
      _loc4_++;
      continue;
    }
  }
  param1.writeShort(this.allianceMatchScore.length);
  var _loc5_ = 0;
  while (_loc5_ < this.allianceMatchScore.length) {
    if (this.allianceMatchScore[_loc5_] < 0) {
      throw new Error("Forbidden value (" + this.allianceMatchScore[_loc5_] + ") on element 4 (starting at 1) of allianceMatchScore.");
    } else {
      param1.writeByte(this.allianceMatchScore[_loc5_]);
      _loc5_++;
      continue;
    }
  }
  this.allianceMapWinner.serializeAs_BasicAllianceInformations(param1);
  if (this.allianceMapWinnerScore < 0) {
    throw new Error("Forbidden value (" + this.allianceMapWinnerScore + ") on element allianceMapWinnerScore.");
  } else {
    param1.writeVarInt(this.allianceMapWinnerScore);
    if (this.allianceMapMyAllianceScore < 0) {
      throw new Error("Forbidden value (" + this.allianceMapMyAllianceScore + ") on element allianceMapMyAllianceScore.");
    } else {
      param1.writeVarInt(this.allianceMapMyAllianceScore);
      if (this.nextTickTime < 0 || this.nextTickTime > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.nextTickTime + ") on element nextTickTime.");
      } else {
        param1.writeDouble(this.nextTickTime);
        return;
      }
    }
  }
};

KohUpdateMessage.prototype.deserializeAs_KohUpdateMessage = function(param1) {
  var _loc10_ = null;
  var _loc11_ = 0;
  var _loc12_ = 0;
  var _loc13_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc10_ = new AllianceInformations();
    _loc10_.deserialize(param1);
    this.alliances.push(_loc10_);
    _loc3_++;
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc11_ = param1.readVarUhShort();
    if (_loc11_ < 0) {
      throw new Error("Forbidden value (" + _loc11_ + ") on elements of allianceNbMembers.");
    } else {
      this.allianceNbMembers.push(_loc11_);
      _loc5_++;
      continue;
    }
  }
  var _loc6_ = param1.readUnsignedShort();
  var _loc7_ = 0;
  while (_loc7_ < _loc6_) {
    _loc12_ = param1.readVarUhInt();
    if (_loc12_ < 0) {
      throw new Error("Forbidden value (" + _loc12_ + ") on elements of allianceRoundWeigth.");
    } else {
      this.allianceRoundWeigth.push(_loc12_);
      _loc7_++;
      continue;
    }
  }
  var _loc8_ = param1.readUnsignedShort();
  var _loc9_ = 0;
  while (_loc9_ < _loc8_) {
    _loc13_ = param1.readByte();
    if (_loc13_ < 0) {
      throw new Error("Forbidden value (" + _loc13_ + ") on elements of allianceMatchScore.");
    } else {
      this.allianceMatchScore.push(_loc13_);
      _loc9_++;
      continue;
    }
  }
  this.allianceMapWinner = new BasicAllianceInformations();
  this.allianceMapWinner.deserialize(param1);
  this.allianceMapWinnerScore = param1.readVarUhInt();
  if (this.allianceMapWinnerScore < 0) {
    throw new Error("Forbidden value (" + this.allianceMapWinnerScore + ") on element of KohUpdateMessage.allianceMapWinnerScore.");
  } else {
    this.allianceMapMyAllianceScore = param1.readVarUhInt();
    if (this.allianceMapMyAllianceScore < 0) {
      throw new Error("Forbidden value (" + this.allianceMapMyAllianceScore + ") on element of KohUpdateMessage.allianceMapMyAllianceScore.");
    } else {
      this.nextTickTime = param1.readDouble();
      if (this.nextTickTime < 0 || this.nextTickTime > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.nextTickTime + ") on element of KohUpdateMessage.nextTickTime.");
      } else {
        return;
      }
    }
  }
};

KohUpdateMessage.prototype.getMessageId = function() {
  return 6439;
};

KohUpdateMessage.prototype.getClassName = function() {
  return 'KohUpdateMessage';
};

module.exports.id = 6439;
module.exports.class = KohUpdateMessage;
module.exports.getInstance = function() {
  return new KohUpdateMessage();
};