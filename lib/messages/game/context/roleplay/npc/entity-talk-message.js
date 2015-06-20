var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var EntityTalkMessage = function() {
  this.entityId = 0;
  this.textId = 0;
  this.parameters = [];
};

util.inherits(EntityTalkMessage, BaseMessage);

EntityTalkMessage.prototype.serialize = function(output) {
  this.serializeAs_EntityTalkMessage(output);
};

EntityTalkMessage.prototype.deserialize = function(input) {
  this.deserializeAs_EntityTalkMessage(input);
};

EntityTalkMessage.prototype.serializeAs_EntityTalkMessage = function(output) {
  param1.writeInt(this.entityId);
  if (this.textId < 0) {
    throw new Error("Forbidden value (" + this.textId + ") on element textId.");
  } else {
    param1.writeVarShort(this.textId);
    param1.writeShort(this.parameters.length);
    var _loc2_ = 0;
    while (_loc2_ < this.parameters.length) {
      param1.writeUTF(this.parameters[_loc2_]);
      _loc2_++;
    }
    return;
  }
};

EntityTalkMessage.prototype.deserializeAs_EntityTalkMessage = function(input) {
  var _loc4_ = null;
  this.entityId = param1.readInt();
  this.textId = param1.readVarUhShort();
  if (this.textId < 0) {
    throw new Error("Forbidden value (" + this.textId + ") on element of EntityTalkMessage.textId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readUTF();
      this.parameters.push(_loc4_);
      _loc3_++;
    }
    return;
  }
};

EntityTalkMessage.prototype.getMessageId = function() {
  return 6110;
};

EntityTalkMessage.prototype.getClassName = function() {
  return 'EntityTalkMessage';
};

module.exports.id = 6110;
module.exports.class = EntityTalkMessage;