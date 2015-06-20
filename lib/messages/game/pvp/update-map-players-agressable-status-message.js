var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var UpdateMapPlayersAgressableStatusMessage = function() {
  this.playerIds = [];
  this.enable = [];
};

util.inherits(UpdateMapPlayersAgressableStatusMessage, BaseMessage);

UpdateMapPlayersAgressableStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_UpdateMapPlayersAgressableStatusMessage(output);
};

UpdateMapPlayersAgressableStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_UpdateMapPlayersAgressableStatusMessage(input);
};

UpdateMapPlayersAgressableStatusMessage.prototype.serializeAs_UpdateMapPlayersAgressableStatusMessage = function(param1) {
  param1.writeShort(this.playerIds.length);
  var _loc2_ = 0;
  while (_loc2_ < this.playerIds.length) {
    if (this.playerIds[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.playerIds[_loc2_] + ") on element 1 (starting at 1) of playerIds.");
    } else {
      param1.writeVarInt(this.playerIds[_loc2_]);
      _loc2_++;
      continue;
    }
  }
  param1.writeShort(this.enable.length);
  var _loc3_ = 0;
  while (_loc3_ < this.enable.length) {
    param1.writeByte(this.enable[_loc3_]);
    _loc3_++;
  }
};

UpdateMapPlayersAgressableStatusMessage.prototype.deserializeAs_UpdateMapPlayersAgressableStatusMessage = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = param1.readVarUhInt();
    if (_loc6_ < 0) {
      throw new Error("Forbidden value (" + _loc6_ + ") on elements of playerIds.");
    } else {
      this.playerIds.push(_loc6_);
      _loc3_++;
      continue;
    }
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc7_ = param1.readByte();
    if (_loc7_ < 0) {
      throw new Error("Forbidden value (" + _loc7_ + ") on elements of enable.");
    } else {
      this.enable.push(_loc7_);
      _loc5_++;
      continue;
    }
  }
};

UpdateMapPlayersAgressableStatusMessage.prototype.getMessageId = function() {
  return 6454;
};

UpdateMapPlayersAgressableStatusMessage.prototype.getClassName = function() {
  return 'UpdateMapPlayersAgressableStatusMessage';
};

module.exports.id = 6454;
module.exports.class = UpdateMapPlayersAgressableStatusMessage;