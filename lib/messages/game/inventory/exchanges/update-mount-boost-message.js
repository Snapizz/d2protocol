var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var UpdateMountBoostMessage = function() {
  this.rideId = 0;
  this.boostToUpdateList = [];
};

util.inherits(UpdateMountBoostMessage, BaseMessage);

UpdateMountBoostMessage.prototype.serialize = function(output) {
  this.serializeAs_UpdateMountBoostMessage(output);
};

UpdateMountBoostMessage.prototype.deserialize = function(input) {
  this.deserializeAs_UpdateMountBoostMessage(input);
};

UpdateMountBoostMessage.prototype.serializeAs_UpdateMountBoostMessage = function(param1) {
  param1.writeVarInt(this.rideId);
  param1.writeShort(this.boostToUpdateList.length);
  var _loc2_ = 0;
  while (_loc2_ < this.boostToUpdateList.length) {
    param1.writeShort((this.boostToUpdateList[_loc2_]).getTypeId());
    (this.boostToUpdateList[_loc2_]).serialize(param1);
    _loc2_++;
  }
};

UpdateMountBoostMessage.prototype.deserializeAs_UpdateMountBoostMessage = function(param1) {
  var _loc4_ = 0;
  var _loc5_ = null;
  this.rideId = param1.readVarInt();
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readUnsignedShort();
    _loc5_ = ProtocolTypeManager.getInstance(UpdateMountBoost, _loc4_);
    _loc5_.deserialize(param1);
    this.boostToUpdateList.push(_loc5_);
    _loc3_++;
  }
};

UpdateMountBoostMessage.prototype.getMessageId = function() {
  return 6179;
};

UpdateMountBoostMessage.prototype.getClassName = function() {
  return 'UpdateMountBoostMessage';
};

module.exports.id = 6179;
module.exports.class = UpdateMountBoostMessage;