var d2com = require('d2com'),
  BaseMessage = require('./game-fight-synchronize-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameFightSynchronizeMessage = function() {
  this.fighters = [];
};

util.inherits(GameFightSynchronizeMessage, BaseMessage);

GameFightSynchronizeMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightSynchronizeMessage(output);
};

GameFightSynchronizeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightSynchronizeMessage(input);
};

GameFightSynchronizeMessage.prototype.serializeAs_GameFightSynchronizeMessage = function(param1) {
  param1.writeShort(this.fighters.length);
  var _loc2_ = 0;
  while (_loc2_ < this.fighters.length) {
    param1.writeShort((this.fighters[_loc2_]).getTypeId());
    (this.fighters[_loc2_]).serialize(param1);
    _loc2_++;
  }
};

GameFightSynchronizeMessage.prototype.deserializeAs_GameFightSynchronizeMessage = function(param1) {
  var _loc4_ = 0;
  var _loc5_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readUnsignedShort();
    _loc5_ = ProtocolTypeManager.getInstance(GameFightFighterInformations, _loc4_);
    _loc5_.deserialize(param1);
    this.fighters.push(_loc5_);
    _loc3_++;
  }
};

GameFightSynchronizeMessage.prototype.getMessageId = function() {
  return 5921;
};

GameFightSynchronizeMessage.prototype.getClassName = function() {
  return 'GameFightSynchronizeMessage';
};

module.exports.id = 5921;
module.exports.class = GameFightSynchronizeMessage;
module.exports.getInstance = function() {
  return new GameFightSynchronizeMessage();
};