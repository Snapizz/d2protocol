var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var NewMailMessage = function() {
  this.sendersAccountId = [];
};

util.inherits(NewMailMessage, BaseMessage);

NewMailMessage.prototype.serialize = function(output) {
  this.serializeAs_NewMailMessage(output);
};

NewMailMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NewMailMessage(input);
};

NewMailMessage.prototype.serializeAs_NewMailMessage = function(param1) {
  this.serializeAs_MailStatusMessage(param1);
  param1.writeShort(this.sendersAccountId.length);
  var _loc2_ = 0;
  while (_loc2_ < this.sendersAccountId.length) {
    if (this.sendersAccountId[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.sendersAccountId[_loc2_] + ") on element 1 (starting at 1) of sendersAccountId.");
    } else {
      param1.writeInt(this.sendersAccountId[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

NewMailMessage.prototype.deserializeAs_NewMailMessage = function(param1) {
  var _loc4_ = 0;
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readInt();
    if (_loc4_ < 0) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of sendersAccountId.");
    } else {
      this.sendersAccountId.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

NewMailMessage.prototype.getMessageId = function() {
  return 6292;
};

NewMailMessage.prototype.getClassName = function() {
  return 'NewMailMessage';
};

module.exports.id = 6292;
module.exports.class = NewMailMessage;
module.exports.getInstance = function() {
  return new NewMailMessage();
};