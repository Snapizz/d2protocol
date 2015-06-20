var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ServerOptionalFeaturesMessage = function() {
  this.features = [];
};

util.inherits(ServerOptionalFeaturesMessage, BaseMessage);

ServerOptionalFeaturesMessage.prototype.serialize = function(output) {
  this.serializeAs_ServerOptionalFeaturesMessage(output);
};

ServerOptionalFeaturesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ServerOptionalFeaturesMessage(input);
};

ServerOptionalFeaturesMessage.prototype.serializeAs_ServerOptionalFeaturesMessage = function(param1) {
  param1.writeShort(this.features.length);
  var _loc2_ = 0;
  while (_loc2_ < this.features.length) {
    if (this.features[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.features[_loc2_] + ") on element 1 (starting at 1) of features.");
    } else {
      param1.writeByte(this.features[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

ServerOptionalFeaturesMessage.prototype.deserializeAs_ServerOptionalFeaturesMessage = function(param1) {
  var _loc4_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readByte();
    if (_loc4_ < 0) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of features.");
    } else {
      this.features.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

ServerOptionalFeaturesMessage.prototype.getMessageId = function() {
  return 6305;
};

ServerOptionalFeaturesMessage.prototype.getClassName = function() {
  return 'ServerOptionalFeaturesMessage';
};

module.exports.id = 6305;
module.exports.class = ServerOptionalFeaturesMessage;
module.exports.getInstance = function() {
  return new ServerOptionalFeaturesMessage();
};