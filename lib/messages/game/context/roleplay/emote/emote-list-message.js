var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var EmoteListMessage = function() {
  this.emoteIds = [];
};

util.inherits(EmoteListMessage, BaseMessage);

EmoteListMessage.prototype.serialize = function(output) {
  this.serializeAs_EmoteListMessage(output);
};

EmoteListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_EmoteListMessage(input);
};

EmoteListMessage.prototype.serializeAs_EmoteListMessage = function(output) {
  param1.writeShort(this.emoteIds.length);
  var _loc2_ = 0;
  while (_loc2_ < this.emoteIds.length) {
    if (this.emoteIds[_loc2_] < 0 || this.emoteIds[_loc2_] > 255) {
      throw new Error("Forbidden value (" + this.emoteIds[_loc2_] + ") on element 1 (starting at 1) of emoteIds.");
    } else {
      param1.writeByte(this.emoteIds[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

EmoteListMessage.prototype.deserializeAs_EmoteListMessage = function(input) {
  var _loc4_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readUnsignedByte();
    if (_loc4_ < 0 || _loc4_ > 255) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of emoteIds.");
    } else {
      this.emoteIds.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

EmoteListMessage.prototype.getMessageId = function() {
  return 5689;
};

EmoteListMessage.prototype.getClassName = function() {
  return 'EmoteListMessage';
};

module.exports.id = 5689;
module.exports.class = EmoteListMessage;