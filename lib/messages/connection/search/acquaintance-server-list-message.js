var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var AcquaintanceServerListMessage = function() {
  this.servers = [];
};

util.inherits(AcquaintanceServerListMessage, BaseMessage);

AcquaintanceServerListMessage.prototype.serialize = function(output) {
  this.serializeAs_AcquaintanceServerListMessage(output);
};

AcquaintanceServerListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AcquaintanceServerListMessage(input);
};

AcquaintanceServerListMessage.prototype.serializeAs_AcquaintanceServerListMessage = function(param1) {
  param1.writeShort(this.servers.length);
  var _loc2_ = 0;
  while (_loc2_ < this.servers.length) {
    if (this.servers[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.servers[_loc2_] + ") on element 1 (starting at 1) of servers.");
    } else {
      param1.writeVarShort(this.servers[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

AcquaintanceServerListMessage.prototype.deserializeAs_AcquaintanceServerListMessage = function(param1) {
  var _loc4_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readVarUhShort();
    if (_loc4_ < 0) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of servers.");
    } else {
      this.servers.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

AcquaintanceServerListMessage.prototype.getMessageId = function() {
  return 6142;
};

AcquaintanceServerListMessage.prototype.getClassName = function() {
  return 'AcquaintanceServerListMessage';
};

module.exports.id = 6142;
module.exports.class = AcquaintanceServerListMessage;