var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var TeleportDestinationsListMessage = function() {
  this.teleporterType = 0;
  this.mapIds = [];
  this.subAreaIds = [];
  this.costs = [];
  this.destTeleporterType = [];
};

util.inherits(TeleportDestinationsListMessage, BaseMessage);

TeleportDestinationsListMessage.prototype.serialize = function(output) {
  this.serializeAs_TeleportDestinationsListMessage(output);
};

TeleportDestinationsListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TeleportDestinationsListMessage(input);
};

TeleportDestinationsListMessage.prototype.serializeAs_TeleportDestinationsListMessage = function(param1) {
  param1.writeByte(this.teleporterType);
  param1.writeShort(this.mapIds.length);
  var _loc2_ = 0;
  while (_loc2_ < this.mapIds.length) {
    if (this.mapIds[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.mapIds[_loc2_] + ") on element 2 (starting at 1) of mapIds.");
    } else {
      param1.writeInt(this.mapIds[_loc2_]);
      _loc2_++;
      continue;
    }
  }
  param1.writeShort(this.subAreaIds.length);
  var _loc3_ = 0;
  while (_loc3_ < this.subAreaIds.length) {
    if (this.subAreaIds[_loc3_] < 0) {
      throw new Error("Forbidden value (" + this.subAreaIds[_loc3_] + ") on element 3 (starting at 1) of subAreaIds.");
    } else {
      param1.writeVarShort(this.subAreaIds[_loc3_]);
      _loc3_++;
      continue;
    }
  }
  param1.writeShort(this.costs.length);
  var _loc4_ = 0;
  while (_loc4_ < this.costs.length) {
    if (this.costs[_loc4_] < 0) {
      throw new Error("Forbidden value (" + this.costs[_loc4_] + ") on element 4 (starting at 1) of costs.");
    } else {
      param1.writeVarShort(this.costs[_loc4_]);
      _loc4_++;
      continue;
    }
  }
  param1.writeShort(this.destTeleporterType.length);
  var _loc5_ = 0;
  while (_loc5_ < this.destTeleporterType.length) {
    param1.writeByte(this.destTeleporterType[_loc5_]);
    _loc5_++;
  }
};

TeleportDestinationsListMessage.prototype.deserializeAs_TeleportDestinationsListMessage = function(param1) {
  var _loc10_ = 0;
  var _loc11_ = 0;
  var _loc12_ = 0;
  var _loc13_ = 0;
  this.teleporterType = param1.readByte();
  if (this.teleporterType < 0) {
    throw new Error("Forbidden value (" + this.teleporterType + ") on element of TeleportDestinationsListMessage.teleporterType.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc10_ = param1.readInt();
      if (_loc10_ < 0) {
        throw new Error("Forbidden value (" + _loc10_ + ") on elements of mapIds.");
      } else {
        this.mapIds.push(_loc10_);
        _loc3_++;
        continue;
      }
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
      _loc11_ = param1.readVarUhShort();
      if (_loc11_ < 0) {
        throw new Error("Forbidden value (" + _loc11_ + ") on elements of subAreaIds.");
      } else {
        this.subAreaIds.push(_loc11_);
        _loc5_++;
        continue;
      }
    }
    var _loc6_ = param1.readUnsignedShort();
    var _loc7_ = 0;
    while (_loc7_ < _loc6_) {
      _loc12_ = param1.readVarUhShort();
      if (_loc12_ < 0) {
        throw new Error("Forbidden value (" + _loc12_ + ") on elements of costs.");
      } else {
        this.costs.push(_loc12_);
        _loc7_++;
        continue;
      }
    }
    var _loc8_ = param1.readUnsignedShort();
    var _loc9_ = 0;
    while (_loc9_ < _loc8_) {
      _loc13_ = param1.readByte();
      if (_loc13_ < 0) {
        throw new Error("Forbidden value (" + _loc13_ + ") on elements of destTeleporterType.");
      } else {
        this.destTeleporterType.push(_loc13_);
        _loc9_++;
        continue;
      }
    }
    return;
  }
};

TeleportDestinationsListMessage.prototype.getMessageId = function() {
  return 5960;
};

TeleportDestinationsListMessage.prototype.getClassName = function() {
  return 'TeleportDestinationsListMessage';
};

module.exports.id = 5960;
module.exports.class = TeleportDestinationsListMessage;
module.exports.getInstance = function() {
  return new TeleportDestinationsListMessage();
};