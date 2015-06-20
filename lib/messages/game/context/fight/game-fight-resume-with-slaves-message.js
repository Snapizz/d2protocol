var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameFightResumeWithSlavesMessage = function() {
  this.slavesInfo = [];
};

util.inherits(GameFightResumeWithSlavesMessage, BaseMessage);

GameFightResumeWithSlavesMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightResumeWithSlavesMessage(output);
};

GameFightResumeWithSlavesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightResumeWithSlavesMessage(input);
};

GameFightResumeWithSlavesMessage.prototype.serializeAs_GameFightResumeWithSlavesMessage = function(param1) {
  this.serializeAs_GameFightResumeMessage(param1);
  param1.writeShort(this.slavesInfo.length);
  var _loc2_ = 0;
  while (_loc2_ < this.slavesInfo.length) {
    (this.slavesInfo[_loc2_]).serializeAs_GameFightResumeSlaveInfo(param1);
    _loc2_++;
  }
};

GameFightResumeWithSlavesMessage.prototype.deserializeAs_GameFightResumeWithSlavesMessage = function(param1) {
  var _loc4_ = null;
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new GameFightResumeSlaveInfo();
    _loc4_.deserialize(param1);
    this.slavesInfo.push(_loc4_);
    _loc3_++;
  }
};

GameFightResumeWithSlavesMessage.prototype.getMessageId = function() {
  return 6215;
};

GameFightResumeWithSlavesMessage.prototype.getClassName = function() {
  return 'GameFightResumeWithSlavesMessage';
};

module.exports.id = 6215;
module.exports.class = GameFightResumeWithSlavesMessage;
module.exports.getInstance = function() {
  return new GameFightResumeWithSlavesMessage();
};