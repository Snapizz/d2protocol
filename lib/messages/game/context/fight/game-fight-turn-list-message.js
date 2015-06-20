var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightTurnListMessage = function() {
  this.ids = [];
  this.deadsIds = [];
};

util.inherits(GameFightTurnListMessage, BaseMessage);

GameFightTurnListMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightTurnListMessage(output);
};

GameFightTurnListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightTurnListMessage(input);
};

GameFightTurnListMessage.prototype.serializeAs_GameFightTurnListMessage = function(output) {
  param1.writeShort(this.ids.length);
  var _loc2_ = 0;
  while (_loc2_ < this.ids.length) {
    param1.writeInt(this.ids[_loc2_]);
    _loc2_++;
  }
  param1.writeShort(this.deadsIds.length);
  var _loc3_ = 0;
  while (_loc3_ < this.deadsIds.length) {
    param1.writeInt(this.deadsIds[_loc3_]);
    _loc3_++;
  }
};

GameFightTurnListMessage.prototype.deserializeAs_GameFightTurnListMessage = function(input) {
  var _loc6_ = 0;
  var _loc7_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = param1.readInt();
    this.ids.push(_loc6_);
    _loc3_++;
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc7_ = param1.readInt();
    this.deadsIds.push(_loc7_);
    _loc5_++;
  }
};

GameFightTurnListMessage.prototype.getMessageId = function() {
  return 713;
};

GameFightTurnListMessage.prototype.getClassName = function() {
  return 'GameFightTurnListMessage';
};

module.exports.id = 713;
module.exports.class = GameFightTurnListMessage;