var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameEntitiesDispositionMessage = function() {
  this.dispositions = [];
};

util.inherits(GameEntitiesDispositionMessage, BaseMessage);

GameEntitiesDispositionMessage.prototype.serialize = function(output) {
  this.serializeAs_GameEntitiesDispositionMessage(output);
};

GameEntitiesDispositionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameEntitiesDispositionMessage(input);
};

GameEntitiesDispositionMessage.prototype.serializeAs_GameEntitiesDispositionMessage = function(param1) {
  param1.writeShort(this.dispositions.length);
  var _loc2_ = 0;
  while (_loc2_ < this.dispositions.length) {
    (this.dispositions[_loc2_]).serializeAs_IdentifiedEntityDispositionInformations(param1);
    _loc2_++;
  }
};

GameEntitiesDispositionMessage.prototype.deserializeAs_GameEntitiesDispositionMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new IdentifiedEntityDispositionInformations();
    _loc4_.deserialize(param1);
    this.dispositions.push(_loc4_);
    _loc3_++;
  }
};

GameEntitiesDispositionMessage.prototype.getMessageId = function() {
  return 5696;
};

GameEntitiesDispositionMessage.prototype.getClassName = function() {
  return 'GameEntitiesDispositionMessage';
};

module.exports.id = 5696;
module.exports.class = GameEntitiesDispositionMessage;
module.exports.getInstance = function() {
  return new GameEntitiesDispositionMessage();
};