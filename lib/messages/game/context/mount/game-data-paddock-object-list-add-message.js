var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameDataPaddockObjectListAddMessage = function() {
  this.paddockItemDescription = [];
};

util.inherits(GameDataPaddockObjectListAddMessage, BaseMessage);

GameDataPaddockObjectListAddMessage.prototype.serialize = function(output) {
  this.serializeAs_GameDataPaddockObjectListAddMessage(output);
};

GameDataPaddockObjectListAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameDataPaddockObjectListAddMessage(input);
};

GameDataPaddockObjectListAddMessage.prototype.serializeAs_GameDataPaddockObjectListAddMessage = function(param1) {
  param1.writeShort(this.paddockItemDescription.length);
  var _loc2_ = 0;
  while (_loc2_ < this.paddockItemDescription.length) {
    (this.paddockItemDescription[_loc2_]).serializeAs_PaddockItem(param1);
    _loc2_++;
  }
};

GameDataPaddockObjectListAddMessage.prototype.deserializeAs_GameDataPaddockObjectListAddMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new PaddockItem();
    _loc4_.deserialize(param1);
    this.paddockItemDescription.push(_loc4_);
    _loc3_++;
  }
};

GameDataPaddockObjectListAddMessage.prototype.getMessageId = function() {
  return 5992;
};

GameDataPaddockObjectListAddMessage.prototype.getClassName = function() {
  return 'GameDataPaddockObjectListAddMessage';
};

module.exports.id = 5992;
module.exports.class = GameDataPaddockObjectListAddMessage;
module.exports.getInstance = function() {
  return new GameDataPaddockObjectListAddMessage();
};