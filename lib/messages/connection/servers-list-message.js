var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ServersListMessage = function() {
  this.servers = [];
};

util.inherits(ServersListMessage, BaseMessage);

ServersListMessage.prototype.serialize = function(output) {
  this.serializeAs_ServersListMessage(output);
};

ServersListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ServersListMessage(input);
};

ServersListMessage.prototype.serializeAs_ServersListMessage = function(param1) {
  param1.writeShort(this.servers.length);
  var _loc2_ = 0;
  while (_loc2_ < this.servers.length) {
    (this.servers[_loc2_]).serializeAs_GameServerInformations(param1);
    _loc2_++;
  }
};

ServersListMessage.prototype.deserializeAs_ServersListMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new GameServerInformations();
    _loc4_.deserialize(param1);
    this.servers.push(_loc4_);
    _loc3_++;
  }
};

ServersListMessage.prototype.getMessageId = function() {
  return 30;
};

ServersListMessage.prototype.getClassName = function() {
  return 'ServersListMessage';
};

module.exports.id = 30;
module.exports.class = ServersListMessage;